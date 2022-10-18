import React, { useState } from 'react';
import { useEffect } from 'react';
import { getCart, saveCart } from '../api';
import { CartContext } from '../Contexts';
import { withUser } from '../withProvider';
let data = [];

function CartProvider({ user, children }) {
  const [cart, setCart] = useState({});
  useEffect(() => {
    if (!user) {
      const savedDataString = localStorage.getItem('cart') || '{}';
      const savedData = JSON.parse(savedDataString);
      setCart(savedData);
      data = savedData;
    } else {
      getCart().then((savedData) => {
        setCart(savedData);
        data = savedData;
      });
    }
  }, [user]);
  function addtoCart(productId, count) {
    const oldCount = cart[productId] || 0;
    const newCart = { ...cart, [productId]: +oldCount + count };
    updateCart(newCart);
  }
  function updateCart(newCart) {
    setCart(newCart);

    if (!user) {
      const cartString = JSON.stringify(newCart);
      localStorage.setItem('cart', cartString);
    } else {
      saveCart(cart);
    }
  }

  const CartCount = Object.keys(cart).reduce(function (previous, current) {
    console.log(cart[current], previous);
    return +previous + Number(cart[current]);
  }, 0);
  console.log(CartCount);

  return (
    <>
      <CartContext.Provider
        value={{ cart, setCart, CartCount, addtoCart, data, updateCart }}
      >
        {children}
      </CartContext.Provider>
    </>
  );
}

export default withUser(CartProvider);
