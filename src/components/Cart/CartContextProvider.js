import React, { useState } from "react";

export const CartContext = React.createContext({});

export default function CartContextProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
    var movies = localStorage.getItem("bookmarks");
    movies = JSON.parse(movies || '[]');
    cart.concat(movies);
    localStorage.setItem("bookmarks", JSON.stringify(cart));

  }






  const removeFromCart = (product) => {
    const temp = [...cart];
    const index = temp.findIndex((cp) => cp.id === product.id);
    temp.splice(index, 3);
    setCart(temp);
  };


  const PlusFromCart = (product) => {
    const currentTableData = JSON.parse(localStorage.getItem("bookmarks"))
    setCart([...currentTableData, product]);
  };




  const values = {

    addToCart,
    cart,
    removeFromCart,
    PlusFromCart

  };

  return <CartContext.Provider value={values}>{children}</CartContext.Provider>;
}

