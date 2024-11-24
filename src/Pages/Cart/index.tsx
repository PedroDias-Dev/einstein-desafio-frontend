import CartSummary from "Components/CartSummary";
import * as S from "./styles";
import CartItems from "Components/CartItems";

const Cart = () => {
  return (
    <S.Wrapper>
      <CartItems />
      <CartSummary />
    </S.Wrapper>
  );
};

export default Cart;
