import { Product as ProductInterface } from "Interfaces/Product";
import * as S from "./styles";

interface ProductProps {
  product: ProductInterface;
}

const Product = ({ product }: ProductProps) => {
  return (
    <S.Wrapper>
      <S.Image src={product.image} alt={product.name} />

      <S.Infos>
        <S.Name>{product.name}</S.Name>
        <S.Bottom>
          <S.StockBadge>IN STOCK</S.StockBadge>

          <S.Price>R$ {product.price}</S.Price>
        </S.Bottom>
      </S.Infos>
    </S.Wrapper>
  );
};

export default Product;
