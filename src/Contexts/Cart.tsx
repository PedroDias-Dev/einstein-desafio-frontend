import { Product } from "Interfaces/Product";
import React, { useEffect, useState } from "react";

export const CartContext = React.createContext({
  cart: [] as Product[],
  totalPrice: "",
  addProductToCart: (product: Product) => {},
  removeProductFromCart: (product: Product) => {},
  changeProductQuantity: (product: Product, quantity: number) => {},
});

const CartProvider = ({ children }: React.PropsWithChildren) => {
  const [cart, setCart] = useState<Product[]>([]);

  const [totalPrice, setTotalPrice] = useState("");

  useEffect(() => {
    calculateTotalPrice();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cart]);

  const calculateTotalPrice = () => {
    const total = cart.reduce((acc, product) => {
      const price = product.price * product.quantity!;
      return acc + price;
    }, 0);

    setTotalPrice(total.toFixed(2));
  };

  const addProductToCart = (product: Product) => {
    const productExists = cart.find((item) => item.id === product.id);

    if (productExists) {
      const newCart = cart.map((item: Product) => {
        if (item.id === product.id && item.quantity) {
          return {
            ...item,
            quantity: item.quantity + 1,
          };
        }

        return item;
      });

      setCart(newCart);
      return;
    }

    setCart((prevCart) => [
      ...prevCart,
      {
        ...product,
        quantity: 1,
      },
    ]);
  };

  const removeProductFromCart = (product: Product) => {
    const productExists = cart.find((item: Product) => item.id === product.id);

    if (!productExists) return;

    const newCart = cart.filter((item) => item.id !== product.id);
    setCart(newCart);
    return;
  };

  const changeProductQuantity = (product: Product, quantity: number) => {
    const productExists = cart.find((item) => item.id === product.id);

    if (!productExists) return;

    if (quantity <= 0) {
      removeProductFromCart(product);
      return;
    }

    const newCart = cart.map((item) => {
      if (item.id === product.id) {
        return {
          ...item,
          quantity,
        };
      }
      return item;
    });

    setCart(newCart);
  };

  const contextValue = {
    cart,
    totalPrice,
    addProductToCart,
    removeProductFromCart,
    changeProductQuantity,
  };

  return (
    <>
      <CartContext.Provider value={contextValue}>
        {children}
      </CartContext.Provider>
    </>
  );
};

export default CartProvider;
