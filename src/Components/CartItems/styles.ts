import styled from "styled-components";
import media from "styled-media-query";

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

  ${media.lessThan("medium")`
    align-items: flex-start;
    flex-direction: column;
    gap: 20px;
  `}
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

  ${media.lessThan("medium")`
    width: 100%;
  `}
`;

export const Title = styled.h3`
  font-size: 16px;
  font-weight: 700;
  color: #111;
`;

export const ControlsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;

  ${media.lessThan("medium")`
    width: 100%;
    justify-content: space-between;
  `}
`;

export const Price = styled.span`
  font-size: 16px;
  font-weight: 500;
`;

export const Controls = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;

  ${media.lessThan("medium")`
    gap: 10px;
  `}
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
