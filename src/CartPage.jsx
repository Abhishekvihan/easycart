import React, { useEffect, useState } from 'react';
import { getProductList } from './api';
import CartList from './CartList';
// import CartRow from './CartRow';
import NoProduct from './NoProduct';
// import Loading from './Loading';

function CartPage({ field }) {
  const [productList, setproductList] = useState([]);
  let Keys = Object.keys(field);

  useEffect(function () {
    const list = getProductList();
    list
      .then((response) => {
        setproductList(response.data.products);
      })
      .catch(() => {
        return <NoProduct />;
      });
  }, []);
  let data = productList.filter(function (item) {
    return Keys.find(function (i) {
      return +item.id === +i;
    });
  });
  console.log(data);

  return <>{data.length > 0 && <CartList products={data} />}</>;
}

export default CartPage;
