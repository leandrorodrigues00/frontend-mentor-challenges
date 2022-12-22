import { createContext, ReactNode, useState } from "react";

interface CartContextProviderProps {
  children: ReactNode;
}

interface CartContextType {
  quantity: number;
  cartItems: number;
  setQuantity: React.Dispatch<React.SetStateAction<number>>;
  setCartItems: React.Dispatch<React.SetStateAction<number>>;
  HandleAddProductToCart: (quantity: number) => void;
}

export const CartContext = createContext({} as CartContextType);

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [quantity, setQuantity] = useState(0);
  const [cartItems, setCartItems] = useState(0);

  function HandleAddProductToCart(quantity: number) {
    setCartItems((quantity += cartItems));
    setQuantity(0);
  }

  return (
    <CartContext.Provider
      value={{
        setQuantity,
        quantity,
        HandleAddProductToCart,
        cartItems,
        setCartItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
