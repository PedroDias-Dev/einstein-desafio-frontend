import useProducts from "Hooks/useProducts";

import * as S from "./styles";
import Product from "Components/Product";
import Filters from "Components/Filters";

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

      <S.Products>{getComponent()}</S.Products>
    </S.Wrapper>
  );
};

export default Marketplace;
