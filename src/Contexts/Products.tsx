import useServices from "Hooks/useServices";
import { Product } from "Interfaces/Product";
import React, { useEffect, useState } from "react";

export const ProductsContext = React.createContext({
  products: [] as Product[],
  cart: [] as Product[],
  setCart: (products: any) => {},
  totalPrice: 0,
});

const ProductsProvider = ({ children }: React.PropsWithChildren) => {
  const { api } = useServices();

  const [products, setProducts] = useState<Product[]>([]);
  const [cart, setCart] = useState<Product[]>([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const total = products.reduce((acc, product) => {
      return acc + product.price;
    }, 0);

    setTotalPrice(total);
  }, [products]);

  useEffect(() => {
    searchProducts();
  }, []);

  const searchProducts = async () => {
    try {
      const response = await api.get("/products");

      setProducts(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const contextValue = {
    products,
    cart,
    setCart,
    totalPrice,
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
