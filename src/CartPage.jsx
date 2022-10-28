import React, { memo, useEffect, useState } from 'react';
import { getProductByIds } from './api';
import CartList from './CartList';
import Loading from './Loading';
import { withCart } from './withProvider';

function CartPage({ cart, data, setCart }) {
  const [products, setProduct] = useState([]);

  const [loading, setLoading] = useState(true);
  const productIds = Object.keys(cart);

  useEffect(() => {
    getProductByIds(productIds).then(function (products) {
      setProduct(products);
      setLoading(false);
    });
    // eslint-disable-next-line
  }, [cart]);

  if (loading) {
    return <Loading />;
  }
  return (
    <div className="max-w-5xl p-5 mx-auto my-10 bg-white">
      {
        <CartList
          products={products}
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
