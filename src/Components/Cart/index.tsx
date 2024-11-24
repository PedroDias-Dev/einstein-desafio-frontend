import * as S from "./styles";
import { Minus, Plus, X } from "lucide-react";
import useCart from "Hooks/useCart";

const CartItems = () => {
  const { cart, removeProductFromCart, changeProductQuantity } = useCart();

  return (
    <S.Wrapper>
      <h3>Seu carrinho</h3>
      <hr />

      <S.CartItems>
        {!cart.length && <p>Nenhum item no carrinho</p>}

        {cart.map((product) => (
          <S.CartProduct key={product.id}>
            <S.Main>
              <img src={product.image} alt={product.title} />

              <S.Title>{product.title}</S.Title>
            </S.Main>

            <S.Controls>
              <S.Price>
                R$ {(product.price * product.quantity!).toFixed(2)}
              </S.Price>

              <S.Quantity>
                <Minus
                  size="15px"
                  onClick={() =>
                    changeProductQuantity(product, product.quantity! - 1)
                  }
                />
                <span>{product.quantity}</span>
                <Plus
                  size="15px"
                  onClick={() =>
                    changeProductQuantity(product, product.quantity! + 1)
                  }
                />
              </S.Quantity>

              <S.Remove>
                <X size="20px" onClick={() => removeProductFromCart(product)} />
              </S.Remove>
            </S.Controls>
          </S.CartProduct>
        ))}
      </S.CartItems>
    </S.Wrapper>
  );
};

export default CartItems;
