import React from 'react';
import { useEffect } from 'react';
// import { useEffect } from 'react';
import { memo } from 'react';
import { useState } from 'react';
import Loading from './Loading';

function CartRow({ src, title, price, cart, id, setCart, updateCart }) {
  const [loading, setLoading] = useState(false);
  const [localcart, setLocalCart] = useState(cart);

  useEffect(
    function () {
      setLocalCart(cart);
    },
    [cart]
  );

  function handleRemove(event) {
    setLoading(true);
    const productId = id;
    const newCart = { ...cart };
    delete newCart[productId];
    console.log('id', id, newCart);
    setCart(newCart);
    localStorage.clear();
    localStorage.setItem('cart', JSON.stringify(newCart));
  }

  function handleChange(event) {
    const newValue = event.target.value;
    const productId = event.target.getAttribute('productid');
    const newlocalCart = { ...localcart, [productId]: newValue };
    setLocalCart(newlocalCart);
    console.log(productId, newValue);
  }

  function updateMyCart() {
    setCart(localcart);
  }
  if (loading) {
    return <Loading />;
  }

  return (
    <div className="max-w-6xl mx-auto">
      <div className="border border-gray-100">
        <div
          productid={id}
          className={
            'hidden grid-cols-7 py-2 bg-white md:grid place-items-center justify-items-start'
          }
        >
          <div
            onClick={(event) => {
              // myFunc(id);
              handleRemove(event);
              // setVisibility(false);
            }}
            className="w-8 h-8 text-center text-gray-300 border border-gray-200 rounded-full cursor-pointer"
          >
            x
          </div>
          <img
            className="border border-gray-300 w-28 "
            src={src}
            alt="try casual"
          />

          <p className="col-span-2 text-red-500 ">{title}</p>
          <p className="">${price}.00</p>
          <p className="">
            <input
              productid={id}
              className="w-8 text-center border border-gray-200 outline-0"
              type="number"
              value={localcart[id]}
              onChange={(event) => {
                handleChange(event);
              }}
            />
          </p>
          <p className="px-16 ">${price * localcart[id]}.00</p>
        </div>
        <div className={'md:hidden'}>
          <div
            productid={id}
            onClick={(event) => {
              handleRemove(event);
            }}
            className="w-8 h-8 text-center text-gray-300 border border-gray-200 rounded-full cursor-pointer"
          >
            x
          </div>
          <div className="flex justify-center">
            <img
              className={'md:hidden w-28 py-2 '}
              src={src}
              alt="try casual"
            />
          </div>

          <div className="flex justify-between px-6 py-2 border border-gray-300 rounded-md">
            <p className="col-span-2 text-red-500 ">Title:</p>
            <span>{title}</span>
          </div>
          <div className="flex justify-between px-6 py-2 border border-gray-300 rounded-md">
            <p className="col-span-2 text-red-500 ">Price:</p>
            <span>${price}.00</span>
          </div>
          <div className="flex justify-between px-6 py-2 border border-gray-300 rounded-md">
            <p className="col-span-2 text-red-500 ">Quantity:</p>
            <input
              productid={id}
              type="number"
              onChange={(event) => {
                handleChange(event);
              }}
              value={localcart[id]}
              className="w-16 px-2 py-1 text-center border border-gray-300"
            />
          </div>
          <div className="flex justify-between px-6 py-2 border border-gray-300 rounded-md">
            <p className="col-span-2 text-red-500 ">Subtotal:</p>
            <span>${price * localcart[id]}.00</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(CartRow);
