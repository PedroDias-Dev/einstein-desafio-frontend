import CartSummary from "Components/CartSummary";
import * as S from "./styles";
import CartItems from "Components/Cart";

const Cart = () => {
  return (
    <S.Wrapper>
      <CartItems />
      <CartSummary />
    </S.Wrapper>
  );
};

export default Cart;
