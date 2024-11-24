import { Product as ProductInterface } from "Interfaces/Product";
import * as S from "./styles";
import { ShoppingCart } from "lucide-react";
import { useEffect } from "react";

interface ProductProps {
  product: ProductInterface;
}

const Product = ({ product }: ProductProps) => {
  useEffect(() => {
    const image = document.getElementById(`image-${product.id}`);
    const addToCart = document.getElementById(`add-to-cart-${product.id}`);

    if (image) {
      image?.addEventListener("mouseover", () => {
        if (addToCart) addToCart.style.opacity = "1";
      });

      image?.addEventListener("mouseleave", () => {
        if (addToCart) addToCart.style.opacity = "0";
      });
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <S.Wrapper>
      <S.Image id={`image-${product.id}`}>
        <img src={product.image} alt={product.title} />

        <S.AddToCart id={`add-to-cart-${product.id}`}>
          Add to Cart
          <ShoppingCart size="20px" />
        </S.AddToCart>
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
