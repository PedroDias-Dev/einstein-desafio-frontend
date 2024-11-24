import styled from "styled-components";
import media from "styled-media-query";

export const Wrapper = styled.div`
  padding: 30px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  border: 1px solid #ededed;
  border-radius: 10px;

  height: fit-content;
  min-height: 400px;

  ${media.lessThan("medium")`
    min-height: auto;
  `}
`;

export const FilterTitle = styled.h3`
  margin: 0;
  font-size: 18px;
`;

export const Categories = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Category = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 15px 0;

  border-bottom: 1px solid #ccc;

  cursor: pointer;

  span {
    color: #333;
  }
`;
