// import axios from 'axios';
import React, { memo } from 'react';
import CartList from './CartList';

// import NoProduct from './NoProduct';

function CartPage({ field, cartData, setCart }) {
  return (
    <>{<CartList setCart={setCart} field={field} cartData={cartData} />}</>
  );
}

export default memo(CartPage);
