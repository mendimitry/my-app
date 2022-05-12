import React, { useState } from "react";

export const CartContext = React.createContext({});

export default function CartContextProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  }
  
  localStorage.setItem("bookmarks",JSON.stringify(cart));


  var data = {bookmarks:[]};
var stored = localStorage.getItem('bookmarks');

  
  const removeFromCart = (product) => {
    const temp = [...cart];
    const index = temp.findIndex((cp) => cp.id === product.id);
    temp.splice(index, 3);
    setCart(temp);
  };


  const PlusFromCart = (product) => {
    setCart([...cart, product]);
  };
  if (stored)
  data = JSON.parse(stored);


  const values = {
    
    addToCart,
    cart,
    data,
    removeFromCart,
    PlusFromCart

  };

  return <CartContext.Provider value={values}>{children}</CartContext.Provider>;
}

