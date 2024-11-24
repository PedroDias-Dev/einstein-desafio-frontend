import { ProductsContext } from "Contexts/Products";
import { useContext } from "react";

const useProducts = () => {
  const productsContext = useContext(ProductsContext);

  return {
    ...productsContext,
  };
};

export default useProducts;
