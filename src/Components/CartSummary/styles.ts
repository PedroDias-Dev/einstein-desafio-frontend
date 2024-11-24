import styled from "styled-components";
import media from "styled-media-query";

export const Wrapper = styled.div`
  padding: 30px;
  display: flex;
  flex-direction: column;
  gap: 40px;

  border: 1px solid #ededed;
  border-radius: 10px;

  height: fit-content;

  min-width: 300px;

  ${media.lessThan("medium")`
    min-width: 80%;
  `}
`;

export const SummaryTitle = styled.h3`
  margin: 0;
  font-size: 18px;
`;

export const Infos = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;

  hr {
    border: 1px solid #e5e5e5;
    width: 100%;
  }
`;

export const Info = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  span {
    margin: 0;
    font-size: 16px;
    color: #333;
    font-weight: 400;
  }

  h3 {
    margin: 0;
    font-size: 16px;
    font-weight: 400;
  }
`;

export const Buttons = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
