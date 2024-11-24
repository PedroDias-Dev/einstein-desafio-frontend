import useServices from "Hooks/useServices";
import { Product } from "Interfaces/Product";
import React, { useEffect, useState } from "react";

export const ProductsContext = React.createContext({
  loading: true,
  products: [] as Product[],
  cart: [] as Product[],
  setCart: (products: any) => {},
  totalPrice: 0,
  categories: [] as string[],
  selectedCategory: "",
  selectCategory: (category: string) => {},
});

const ProductsProvider = ({ children }: React.PropsWithChildren) => {
  const { api } = useServices();

  const [loading, setLoading] = useState<boolean>(true);

  const [products, setProducts] = useState<Product[]>([]);
  const [cart, setCart] = useState<Product[]>([]);

  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("");

  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const total = products.reduce((acc, product) => {
      return acc + product.price;
    }, 0);

    setTotalPrice(total);
  }, [products]);

  useEffect(() => {
    Promise.all([searchProducts({}), getCategories()]).then(() => {
      setLoading(false);
    });
  }, []);

  const searchProducts = async ({
    category,
    search,
  }: {
    category?: string;
    search?: string;
  }) => {
    let productsUrl = "/products";

    if (category) productsUrl += `/category/${category}`;

    try {
      const response = await api.get(productsUrl);

      setProducts(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const getCategories = async () => {
    try {
      const response = await api.get("/products/categories");

      setCategories(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const selectCategory = async (category: string) => {
    setLoading(true);

    setSelectedCategory(category);
    await searchProducts({ category });

    setLoading(false);
  };

  const contextValue = {
    loading,
    products,
    cart,
    setCart,
    totalPrice,
    categories,
    selectedCategory,
    selectCategory,
  };

  return (
    <>
      <ProductsContext.Provider value={contextValue}>
        {children}
      </ProductsContext.Provider>
    </>
  );
};

export default ProductsProvider;
