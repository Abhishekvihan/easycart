// import axios from 'axios';
import React, { memo, useEffect, useState } from 'react';
import { getProductByIds } from './api';
import CartList from './CartList';
import Loading from './Loading';
import { withCart } from './withProvider';

function CartPage({ cart, data, setCart }) {
  const [productList, setproductList] = useState([]);

  const [loading, setLoading] = useState(true);
  const productIds = Object.keys(cart);

  useEffect(() => {
    getProductByIds(productIds).then(function (products) {
      setproductList(products);
      setLoading(false);
    });
  }, [productIds]);

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
          data={data}
          updateCart={setCart}
        />
      }
    </div>
  );
}

export default withCart(memo(CartPage));
