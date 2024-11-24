import styled from "styled-components";

export const BreadcrumbWrapper = styled.div`
  padding: 30px 50px;

  display: flex;
  flex-direction: column;
  gap: 10px;

  h1 {
    font-size: 24px;
    color: #000;
    margin: 0;
  }
`;

export const Breadcrumb = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  span {
    color: #424242;
    font-size: 16px;
    cursor: pointer;
  }

  h3 {
    font-size: 16px;
    font-weight: normal;
    margin: 0;
  }
`;
