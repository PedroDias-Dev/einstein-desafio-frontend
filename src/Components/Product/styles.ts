import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 200px;

  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 10px;
`;

export const Infos = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const Name = styled.h3`
  font-size: 16px;
`;

export const Bottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const StockBadge = styled.span`
  padding: 5px 10px;
  border-radius: 50%;
  font-size: 12px;
`;

export const Price = styled.span`
  font-size: 14px;
`;
