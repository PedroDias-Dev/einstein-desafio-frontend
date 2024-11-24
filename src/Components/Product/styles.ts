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

  cursor: pointer;

  position: relative;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    z-index: 1;
  }
`;

export const AddToCart = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;

  transition: 0.3s;
  opacity: 0;

  padding: 5px 0px;
  width: 100%;
  height: 40px;

  background-color: #000;
  color: #fff;

  z-index: 2;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
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
