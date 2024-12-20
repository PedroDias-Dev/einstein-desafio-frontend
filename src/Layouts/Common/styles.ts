import styled from "styled-components";
import media from "styled-media-query";

export const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;

  background-color: #ededed;
`;

export const MainContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;

  background-color: #fff;

  padding: 40px 50px;

  overflow-y: auto;

  ${media.lessThan("medium")`
    padding: 20px;
  `}
`;
