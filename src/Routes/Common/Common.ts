import Marketplace from "Pages/Marketplace";
import Cart from "Pages/Cart";

const CommonRoutes = {
  Marketplace: {
    displayName: "Marketplace",
    path: "/marketplace",
    element: Marketplace,
    showBreadcrumbTitle: false,
  },
  Cart: {
    displayName: "Carrinho",
    path: "/cart",
    element: Cart,
    showBreadcrumbTitle: true,
  },
};

export default CommonRoutes;
