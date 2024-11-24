import { CircleUserRound, Search, ShoppingCart } from "lucide-react";
import * as S from "./styles";

import Logo from "Assets/einstein-logo.jpg";
import { useNavigate } from "react-router-dom";
import CommonRoutes from "Routes/Common/Common";
import Input from "Components/Form/Input";
import useProducts from "Hooks/useProducts";

const Header = () => {
  const { setSearch } = useProducts();

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
        <Input
          placeholder="Procure um produto"
          icon={<Search size="20px" />}
          onChange={(e) => setSearch(e.target.value)}
        />

        <ShoppingCart
          size="32px"
          onClick={() => navigate(CommonRoutes.Cart.path)}
        />
        <CircleUserRound size="32px" />
      </S.Container>
    </S.Wrapper>
  );
};

export default Header;
