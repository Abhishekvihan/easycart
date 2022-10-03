// import axios from 'axios';
import React, { memo, useEffect, useState } from 'react';
import { getProductData } from './api';
import CartList from './CartList';
import Loading from './Loading';

function CartPage({ cart, cartData, setCart }) {
  const [productList, setproductList] = useState([]);

  const [loading, setLoading] = useState(true);
  const keys = Object.keys(cart);
  useEffect(() => {
    const promises = keys.map(function (productId) {
      return getProductData(productId);
    });
    const badiPromise = Promise.all(promises);
    badiPromise.then(function (response) {
      setproductList(response);
      setLoading(false);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cart]);

  if (loading) {
    return <Loading />;
  }
  return (
    <div className="max-w-5xl p-5 mx-auto my-10 bg-white">
      {
        <CartList
          products={productList}
          setCart={setCart}
          cart={cart}
          cartData={cartData}
          updateCart={setCart}
        />
      }
    </div>
  );
}

export default memo(CartPage);
