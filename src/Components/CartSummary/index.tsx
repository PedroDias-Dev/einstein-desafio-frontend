import Button from "Components/Form/Button";
import * as S from "./styles";

const CartSummary = () => {
  return (
    <S.Wrapper>
      <S.SummaryTitle>Order Summary</S.SummaryTitle>

      <S.Infos>
        <S.Info>
          <span>Subtotal</span>
          <h3>R$ 100</h3>
        </S.Info>

        <S.Info>
          <span>Frete</span>
          <h3>R$ 100</h3>
        </S.Info>

        <S.Info>
          <span>Tax</span>
          <h3>R$ 100</h3>
        </S.Info>

        <hr />

        <S.Info>
          <span>Total</span>
          <h3>R$ 100</h3>
        </S.Info>
      </S.Infos>

      <S.Buttons>
        <Button type="button" text="Checkout" variant="primary" />
        <Button type="button" text="Continue na loja" variant="link" />
      </S.Buttons>
    </S.Wrapper>
  );
};

export default CartSummary;
