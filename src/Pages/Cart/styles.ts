import styled from "styled-components";
import media from "styled-media-query";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
  justify-items: center;
  gap: 40px;

  ${media.lessThan("medium")`
    grid-template-columns: 1fr;
  `}
`;
