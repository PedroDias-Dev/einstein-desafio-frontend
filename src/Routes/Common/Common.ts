import Marketplace from "Pages/Marketplace";
import Cart from "Pages/Cart";

const CommonRoutes = {
  Marketplace: {
    displayName: "Marketplace",
    path: "/marketplace",
    element: Marketplace,
  },
  Cart: {
    displayName: "Carrinho",
    path: "/cart",
    element: Cart,
  },
};

export default CommonRoutes;
