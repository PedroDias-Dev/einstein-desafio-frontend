import useProducts from "Hooks/useProducts";
import * as S from "./styles";
import { Minus, Plus, X } from "lucide-react";

const CartItems = () => {
  const { products } = useProducts();

  return (
    <S.Wrapper>
      <h3>Seu carrinho</h3>
      <hr />

      <S.CartItems>
        {!products.length && <p>Nenhum item no carrinho</p>}

        {products.map((product) => (
          <S.CartProduct key={product.id}>
            <S.Main>
              <img src={product.image} alt={product.title} />

              <S.Title>{product.title}</S.Title>
            </S.Main>

            <S.Controls>
              <S.Price>R$ {product.price}</S.Price>

              <S.Quantity>
                <Minus size="15px" />
                <span>1</span>
                <Plus size="15px" />
              </S.Quantity>

              <S.Remove>
                <X size="20px" />
              </S.Remove>
            </S.Controls>
          </S.CartProduct>
        ))}
      </S.CartItems>
    </S.Wrapper>
  );
};

export default CartItems;
