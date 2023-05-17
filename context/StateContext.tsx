import React, { createContext, useContext, useState, useEffect } from "react";
import { StateContextProps } from "@/typings";
import { toast } from "react-hot-toast";

const Context = createContext<StateContextProps | undefined>(undefined);

export const StateContext = ({ children }: { children: React.ReactNode }) => {
  const [showCart, setShowCart] = useState(false);
  const [cartItem, setCartItem] = useState<number>(0);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [totalQuantities, setTotalQuantities] = useState<number>(0);
  const [qty, setQty] = useState(1);

  const incQty = () => {
    setQty((prevQty) => prevQty + 1);
  };

  const decQty = () => {
    setQty((prevQty) => {
      if (prevQty - 1 < 1) return 1;
      return prevQty - 1;
    });
  };
  const contextValue: StateContextProps = {
    showCart,
    cartItem,
    totalPrice,
    totalQuantities,
    qty,
    incQty,
    decQty,
  };

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};

export const useStateContext = (): StateContextProps => {
  const context = useContext(Context);
  if (!context) {
    throw new Error(
      "useStateContext must be used within a StateContextProvider"
    );
  }
  return context;
};
