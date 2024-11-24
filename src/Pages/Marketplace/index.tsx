import useProducts from "Hooks/useProducts";

import * as S from "./styles";
import Product from "Components/Product";
import Filters from "Components/Filters";

import { motion } from "framer-motion";
import Loading from "Components/Loading";

const Marketplace = () => {
  const { products, loading } = useProducts();

  const getComponent = () => {
    if (loading) {
      return <Loading />;
    }

    if (!products.length)
      return <S.NoProducts>Nenhum produto encontrado...</S.NoProducts>;

    return (
      <S.Products>
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </S.Products>
    );
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
        {getComponent()}
      </motion.div>
    </S.Wrapper>
  );
};

export default Marketplace;
