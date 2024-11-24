import { useNavigate } from "react-router-dom";
import * as S from "./styles";
import { ChevronRight } from "lucide-react";
import CommonRoutes from "Routes/Common/Common";

const Breadcrumb = ({
  displayName,
  showBreadcrumbTitle,
}: {
  displayName: string;
  showBreadcrumbTitle?: boolean;
}) => {
  const navigate = useNavigate();

  return (
    <S.BreadcrumbWrapper>
      {showBreadcrumbTitle && <h1>{displayName}</h1>}
      <S.Breadcrumb>
        <span onClick={() => navigate(CommonRoutes.Marketplace.path)}>
          Ecommerce
        </span>

        <ChevronRight />

        <h3>{displayName}</h3>
      </S.Breadcrumb>
    </S.BreadcrumbWrapper>
  );
};

export default Breadcrumb;
