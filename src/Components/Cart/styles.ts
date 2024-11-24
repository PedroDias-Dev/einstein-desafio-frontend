import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  width: 100%;

  hr {
    border: 1px solid #e5e5e5;
    width: 100%;
  }
`;

export const CartItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const CartProduct = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const Main = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  img {
    width: 80px;
    height: 80px;
    object-fit: contain;
    border-radius: 5px;

    padding: 5px;
    background-color: #f5f5f5;
  }
`;

export const Title = styled.h3`
  font-size: 16px;
  font-weight: 700;
  color: #111;
`;

export const Controls = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
`;

export const Price = styled.span`
  font-size: 16px;
  font-weight: 500;
`;

export const Quantity = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  padding: 5px;
  border-radius: 5px;
  border: 1px solid #ddd;

  svg {
    cursor: pointer;
  }

  -webkit-user-select: none;
  user-select: none;
`;

export const Remove = styled.div`
  border-radius: 5px;
  cursor: pointer;
  background-color: #ddd;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 30px;
  height: 30px;

  transition: all 0.2s ease-in-out;
  &:hover {
    background-color: #ccc;
  }
`;
