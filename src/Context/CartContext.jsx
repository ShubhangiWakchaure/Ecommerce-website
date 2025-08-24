// src/context/CartContext.js
import React, { createContext, useState, useContext } from 'react';

// Create CartContext
const CartContext = createContext();

// CartProvider component to wrap your app and provide cart state
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  // You can add logic to update the cartItems and totalAmount

  return (
    <CartContext.Provider value={{ cartItems, totalAmount, setCartItems, setTotalAmount }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to use CartContext
export const useCart = () => useContext(CartContext);

export default CartContext;
