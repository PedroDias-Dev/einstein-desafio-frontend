import Header from "Components/Header";
import * as S from "./styles";
import ServicesProvider from "Contexts/Services";
import ProductsProvider from "Contexts/Products";
import Breadcrumb from "Components/Breadcrumb";

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
        <S.Wrapper>
          <Header />

          <Breadcrumb
            displayName={displayName || ""}
            showBreadcrumbTitle={showBreadcrumbTitle}
          />

          <S.MainContent>{children}</S.MainContent>
        </S.Wrapper>
      </ProductsProvider>
    </ServicesProvider>
  );
};

export default CommonLayout;
