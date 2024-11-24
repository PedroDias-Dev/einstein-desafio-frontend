import useProducts from "Hooks/useProducts";

import * as S from "./styles";
import Product from "Components/Product";
import Filters from "Components/Filters";

import { motion } from "framer-motion";

const Marketplace = () => {
  const { products, loading } = useProducts();

  const getComponent = () => {
    if (loading) {
      return <S.Loading>Carregando...</S.Loading>;
    }

    if (!products.length)
      return <S.NoProducts>Nenhum produto encontrado...</S.NoProducts>;

    return products.map((product) => (
      <Product key={product.id} product={product} />
    ));
  };

  return (
    <S.Wrapper>
      <Filters />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        <S.Products>{getComponent()}</S.Products>
      </motion.div>
    </S.Wrapper>
  );
};

export default Marketplace;
