import Header from "Components/Header";
import * as S from "./styles";
import ServicesProvider from "Contexts/Services";
import ProductsProvider from "Contexts/Products";
import Breadcrumb from "Components/Breadcrumb";
import CartProvider from "Contexts/Cart";
import { motion } from "framer-motion";

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
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <S.Wrapper>
              <Header />

              <Breadcrumb
                displayName={displayName || ""}
                showBreadcrumbTitle={showBreadcrumbTitle}
              />

              <S.MainContent>{children}</S.MainContent>
            </S.Wrapper>
          </motion.div>
        </CartProvider>
      </ProductsProvider>
    </ServicesProvider>
  );
};

export default CommonLayout;
