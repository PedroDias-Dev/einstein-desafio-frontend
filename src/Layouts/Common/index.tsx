import Header from "Components/Header";
import * as S from "./styles";
import ServicesProvider from "Contexts/Services";
import ProductsProvider from "Contexts/Products";
import Breadcrumb from "Components/Breadcrumb";
import CartProvider from "Contexts/Cart";

const CommonLayout = ({
  displayName,
  showBreadcrumbTitle,
  children,
}: {
  displayName?: string;
  showBreadcrumbTitle?: boolean;
  children: React.ReactNode;
}) => {
  return (
    <ServicesProvider>
      <ProductsProvider>
        <CartProvider>
          <S.Wrapper>
            <Header />

            <Breadcrumb
              displayName={displayName || ""}
              showBreadcrumbTitle={showBreadcrumbTitle}
            />

            <S.MainContent>{children}</S.MainContent>
          </S.Wrapper>
        </CartProvider>
      </ProductsProvider>
    </ServicesProvider>
  );
};

export default CommonLayout;
