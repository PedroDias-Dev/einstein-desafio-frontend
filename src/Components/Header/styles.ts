import styled from "styled-components";

interface LinkProps {
  active: boolean;
}

export const Wrapper = styled.div`
  background-color: #fff;
  padding: 20px 50px;

  display: flex;
  align-items: center;
  justify-content: space-between;
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

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const Link = styled.a<LinkProps>`
  color: #424242;
  text-decoration: none;
  font-size: 14px;
  font-weight: ${(props: any) => (props.active ? "bold" : "normal")};
  transition: 0.3s;
`;
