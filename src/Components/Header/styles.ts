import styled from "styled-components";
import media from "styled-media-query";

interface LinkProps {
  active: boolean;
}

export const Wrapper = styled.div`
  background-color: #fff;
  padding: 20px 50px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  ${media.lessThan("medium")`
    flex-direction: column;
    gap: 20px;
  `}
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  img {
    width: 100%;
    height: 30px;
    object-fit: contain;
  }

  h1 {
    font-size: 18px;
    font-weight: bold;
  }
`;

export const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  ${media.lessThan("medium")`
    flex-direction: column;
    width: 100%;
  `}
`;

export const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  svg {
    cursor: pointer;
  }

  ${media.lessThan("medium")`
    svg {
      width: 20px;
      height: 20px;
    }
  `}
`;

export const Link = styled.span<LinkProps>`
  color: #424242;
  text-decoration: none;
  font-size: 14px;
  font-weight: ${(props: any) => (props.active ? "bold" : "normal")};
  transition: 0.3s;
  cursor: pointer;
`;
