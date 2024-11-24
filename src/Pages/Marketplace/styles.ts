import styled from "styled-components";
import media from "styled-media-query";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 300px 1fr;
  gap: 40px;

  ${media.lessThan("medium")`
    grid-template-columns: 1fr;
  `}
`;

export const Products = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  justify-items: center;
  gap: 20px;

  ${media.lessThan("medium")`
    gap: 40px;
  `}
`;

export const Loading = styled.div``;

export const NoProducts = styled.h3`
  text-align: center;
  font-size: 20px;
  font-weight: normal;
  color: #424242;
`;
