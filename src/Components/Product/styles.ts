import styled from "styled-components";
import media from "styled-media-query";

export const Wrapper = styled.div`
  max-width: 300px;

  display: flex;
  flex-direction: column;
  gap: 25px;

  button {
    display: none;
  }

  ${media.lessThan("medium")`
    width: 100%;
    max-width: 100%;

    button {
      display: block;
    }
  `}
`;

export const ImageWrapper = styled.div`
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 10px;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  max-width: 300px;
  height: 250px;

  cursor: pointer;

  position: relative;
  overflow: hidden;

  transition: 0.3s;

  &:hover {
    background-color: #fafafa;
    img {
      opacity: 0.3;
    }
  }

  ${media.lessThan("medium")`
    width: auto;
    max-width: 100%;

    height: 200px;
  `}
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  z-index: 1;
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

  ${media.lessThan("medium")`
    text-overflow: initial;
    white-space: initial;
    overflow: initial;
  `}
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
