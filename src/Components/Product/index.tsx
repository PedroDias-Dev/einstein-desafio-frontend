import { Product as ProductInterface } from "Interfaces/Product";
import * as S from "./styles";
import { ShoppingCart } from "lucide-react";
import { useEffect } from "react";
import useCart from "Hooks/useCart";
import Button from "Components/Form/Button";

interface ProductProps {
  product: ProductInterface;
}

const Product = ({ product }: ProductProps) => {
  const { addProductToCart } = useCart();

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
      <S.ImageWrapper id={`image-${product.id}`}>
        <S.Image src={product.image} alt={product.title} />

        <S.AddToCart
          id={`add-to-cart-${product.id}`}
          onClick={() => addProductToCart(product)}
        >
          Add to Cart
          <ShoppingCart size="20px" />
        </S.AddToCart>
      </S.ImageWrapper>

      <S.Infos>
        <S.Name>{product.title}</S.Name>
        <S.Bottom>
          <S.StockBadge>IN STOCK</S.StockBadge>

          <S.Price>R$ {product.price.toFixed(2)}</S.Price>
        </S.Bottom>
      </S.Infos>

      <Button
        text="Adicionar ao carrinho"
        variant="primary"
        onClick={() => addProductToCart(product)}
      />
    </S.Wrapper>
  );
};

export default Product;
