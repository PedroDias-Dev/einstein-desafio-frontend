import styled from "styled-components";

interface ButtonProps {
  variant: "primary" | "link";
}

export const ButtonWrapper = styled.button<ButtonProps>`
  padding: 15px;
  border-radius: 5px;
  font-size: 16px;
  width: 100%;

  cursor: pointer;

  border: none;
  outline: none;

  background-color: ${({ variant }) =>
    variant === "primary" ? "#000" : "transparent"};

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;

  transition: all 0.3s ease;

  &:hover {
    background-color: ${({ variant }) =>
      variant === "primary" ? "#424242" : "#f5f5f5"};
  }
`;

export const ButtonText = styled.span<ButtonProps>`
  color: ${({ variant }) => (variant === "primary" ? "#fff" : "#000")};
  text-decoration: ${({ variant }) =>
    variant === "link" ? "underline" : "none"};
`;
