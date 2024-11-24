import styled from "styled-components";

export const InputWrapper = styled.div`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  width: 100%;
  transition: border-color 0.3s ease;

  display: flex;
  align-items: center;
  gap: 5px;
`;

export const Input = styled.input`
  box-sizing: border-box;
  outline: none;
  width: 100%;
  border: none;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: #424242;
  }

  &::placeholder {
    color: #999;
  }
`;
