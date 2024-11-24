import * as S from "./styles";

export type InputProps = {
  label?: string;
  placeholder?: string;
  type?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  icon?: React.ReactNode;
};

const Input = (props: InputProps) => {
  return (
    <S.InputWrapper>
      {props.icon && props.icon}
      <S.Input {...props} />
    </S.InputWrapper>
  );
};

export default Input;
