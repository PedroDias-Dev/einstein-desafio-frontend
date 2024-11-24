import Header from "Components/Header";
import * as S from "./styles";
import ServicesProvider from "Contexts/Services";
import ProductsProvider from "Contexts/Products";
import { ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import CommonRoutes from "Routes/Common/Common";

const CommonLayout = ({
  displayName,
  children,
}: {
  displayName?: string;
  children: React.ReactNode;
}) => {
  const navigate = useNavigate();

  return (
    <ServicesProvider>
      <ProductsProvider>
        <S.Wrapper>
          <Header />

          <S.Breadcrumb>
            <span onClick={() => navigate(CommonRoutes.Marketplace.path)}>
              Ecommerce
            </span>
            <ChevronRight />
            <h3>{displayName}</h3>
          </S.Breadcrumb>

          <S.MainContent>{children}</S.MainContent>
        </S.Wrapper>
      </ProductsProvider>
    </ServicesProvider>
  );
};

export default CommonLayout;
