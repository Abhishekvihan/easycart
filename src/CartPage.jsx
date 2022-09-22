// import axios from 'axios';
import React, { memo } from 'react';
import CartList from './CartList';

function CartPage({ field, cartData, setCart }) {
  return (
    <>{<CartList setCart={setCart} field={field} cartData={cartData} />}</>
  );
}

export default memo(CartPage);
