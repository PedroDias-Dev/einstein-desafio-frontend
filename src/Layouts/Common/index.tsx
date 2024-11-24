import Header from "Components/Header";
import * as S from "./styles";
import ServicesProvider from "Contexts/Services";
import ProductsProvider from "Contexts/Products";

const CommonLayout = ({
  displayName,
  children,
}: {
  displayName?: string;
  children: React.ReactNode;
}) => {
  return (
    <ServicesProvider>
      <ProductsProvider>
        <S.Wrapper>
          <Header />

          <S.Breadcrumb>Ecommerce | {displayName}</S.Breadcrumb>

          <S.MainContent>{children}</S.MainContent>
        </S.Wrapper>
      </ProductsProvider>
    </ServicesProvider>
  );
};

export default CommonLayout;
