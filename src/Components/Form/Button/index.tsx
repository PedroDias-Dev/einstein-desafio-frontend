import * as S from "./styles";

export type ButtonProps = {
  variant: "primary" | "link";
  type?: "button" | "submit";
  text?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  icon?: React.ReactNode;
};

const Button = (props: ButtonProps) => {
  return (
    <S.ButtonWrapper {...props}>
      {props.icon && props.icon}

      <S.ButtonText variant={props.variant}>{props.text}</S.ButtonText>
    </S.ButtonWrapper>
  );
};

export default Button;
