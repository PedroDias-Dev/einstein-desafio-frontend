import { CircleUserRound, ShoppingCart } from "lucide-react";
import * as S from "./styles";

import Logo from "Assets/einstein-logo.jpg";
import { useNavigate } from "react-router-dom";
import CommonRoutes from "Routes/Common/Common";

const Header = () => {
  const navigate = useNavigate();

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
        <ShoppingCart onClick={() => navigate(CommonRoutes.Cart.path)} />
        <CircleUserRound />
      </S.Container>
    </S.Wrapper>
  );
};

export default Header;
