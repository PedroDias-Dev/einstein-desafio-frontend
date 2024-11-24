import { ProductsContext } from "Contexts/Products";
import { useContext } from "react";

const useProducts = () => {
  const { products, cart, setCart, totalPrice } = useContext(ProductsContext);

  return {
    products,
    cart,
    setCart,
    totalPrice,
  };
};

export default useProducts;
