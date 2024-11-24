import styled from "styled-components";

export const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;

  background-color: #ededed;
`;

export const Breadcrumb = styled.div`
  padding: 20px 50px;

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
  }
`;

export const MainContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;

  background-color: #fff;

  padding: 40px 50px;

  overflow-y: auto;
`;
