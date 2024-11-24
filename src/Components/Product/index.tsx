import { Product as ProductInterface } from "Interfaces/Product";
import * as S from "./styles";

interface ProductProps {
  product: ProductInterface;
}

const Product = ({ product }: ProductProps) => {
  return (
    <S.Wrapper>
      <S.Image>
        <img src={product.image} alt={product.title} />
      </S.Image>

      <S.Infos>
        <S.Name>{product.title}</S.Name>
        <S.Bottom>
          <S.StockBadge>IN STOCK</S.StockBadge>

          <S.Price>R$ {product.price}</S.Price>
        </S.Bottom>
      </S.Infos>
    </S.Wrapper>
  );
};

export default Product;
