// import axios from 'axios';
import React, { memo } from 'react';
import CartList from './CartList';

// import NoProduct from './NoProduct';

function CartPage({ field }) {
  return <>{<CartList field={field} />}</>;
}

export default memo(CartPage);
