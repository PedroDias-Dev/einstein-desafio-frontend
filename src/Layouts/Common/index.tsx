import Header from "Components/Header";
import * as S from "./styles";

const CommonLayout = ({
  displayName,
  children,
}: {
  displayName?: string;
  children: React.ReactNode;
}) => {
  return (
    <S.Wrapper>
      <Header />

      <S.Breadcrumb>Ecommerce | {displayName}</S.Breadcrumb>

      <S.MainContent>{children}</S.MainContent>
    </S.Wrapper>
  );
};

export default CommonLayout;
