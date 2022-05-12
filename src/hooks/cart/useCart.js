import { useContext, useState, useEffect } from "react";
import { CartContext } from "../../components/Cart/CartContextProvider";

export const useCart = () => {

  const { cart, addToCart, removeFromCart, PlusFromCart } = useContext(CartContext);






  return {
    cart,
    addToCart,
    removeFromCart,
    PlusFromCart


  };
};
