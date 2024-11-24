import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 200px;

  display: flex;
  flex-direction: column;
  gap: 25px;
`;

export const Image = styled.div`
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 10px;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  max-width: 300px;
  height: 200px;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  cursor: pointer;

  :hover {
    opacity: 0.3;
  }

  position: relative;

  :hover:after {
    content: "Adicionar ao carrinho";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #fff;
    font-size: 20px;
  }
`;

export const Infos = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const Name = styled.h3`
  font-size: 16px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  margin: 0;
`;

export const Bottom = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

export const StockBadge = styled.span`
  padding: 5px 10px;
  border-radius: 50px;
  font-size: 12px;
  border: 1px solid #ededed;
`;

export const Price = styled.span`
  font-size: 14px;
`;
