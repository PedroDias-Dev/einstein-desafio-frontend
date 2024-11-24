import useProducts from "Hooks/useProducts";

import * as S from "./styles";
import Product from "Components/Product";

const Marketplace = () => {
  const { products } = useProducts();

  return (
    <S.Wrapper>
      <S.Products>
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </S.Products>
    </S.Wrapper>
  );
};

export default Marketplace;
