import { CircleUserRound, ShoppingCart } from "lucide-react";
import * as S from "./styles";

import Logo from "Assets/einstein-logo.jpg";

const Header = () => {
  const links = [
    { label: "Home", href: "/marketplace" },
    { label: "Categorias", href: "/categories" },
    { label: "Sobre", href: "/about" },
    { label: "Contato", href: "/contact" },
  ];

  const isLinkActive = (link: string) => {
    return window.location.pathname === link;
  };

  return (
    <S.Wrapper>
      <S.Logo>
        <img src={Logo} alt="Logo" />
        <h1>ECOMMERCE</h1>
      </S.Logo>

      <S.Container>
        {links.map((link) => (
          <S.Link
            key={link.label}
            href={link.href}
            active={isLinkActive(link.href)}
          >
            {link.label}
          </S.Link>
        ))}
      </S.Container>

      <S.Container>
        {/* // input */}
        <ShoppingCart />
        <CircleUserRound />
      </S.Container>
    </S.Wrapper>
  );
};

export default Header;
