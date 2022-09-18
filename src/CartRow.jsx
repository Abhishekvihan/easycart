import React from 'react';
import { memo } from 'react';
import { useState } from 'react';

function CartRow({ src, title, price, field, id, setCart }) {
  const [quantity, setQuantity] = useState(2);
  const [visibility, setVisibility] = useState(true);

  const myFunc = (id) => {
    const myObj = localStorage.getItem('cart');
    let arr1 = Object.keys(JSON.parse(myObj));
    const index = arr1.indexOf(id.toString());
    arr1 = arr1.filter((a) => +a !== id);
    let arr2 = Object.values(JSON.parse(myObj));
    arr2.splice(index, 1);

    const obj = {};
    arr1.forEach((value, index) => {
      obj[value] = arr2[index];
    });
    localStorage.clear();
    localStorage.setItem('cart', JSON.stringify(obj));
    setCart(obj);
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="border border-gray-100">
        <div className="flex justify-center py-2 md:hidden"></div>
        <div
          className={
            visibility
              ? 'hidden grid-cols-7 py-2 bg-white md:grid place-items-center justify-items-start'
              : 'hidden'
          }
        >
          <div
            onClick={(e) => {
              myFunc(id);
              setVisibility(false);
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
              className="w-8 text-center border border-gray-200 outline-0"
              type="number"
              value={quantity}
              onChange={(event) => {
                setQuantity(event.target.value);
              }}
            />
          </p>
          <p className="px-16 ">${price * quantity}.00</p>
        </div>
        <div className={visibility ? 'md:hidden' : 'hidden'}>
          <div
            onClick={(e) => {
              setVisibility(false);
              myFunc(id);
            }}
            className="w-8 h-8 text-center text-gray-300 border border-gray-200 rounded-full cursor-pointer"
          >
            x
          </div>
          <div className="flex justify-center">
            <img
              className={visibility ? 'md:hidden w-28 py-2 ' : 'hidden'}
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
              type="number"
              onChange={(event) => {
                setQuantity(event.target.value);
              }}
              value={quantity}
              className="w-16 px-2 py-1 text-center border border-gray-300"
            />
          </div>
          <div className="flex justify-between px-6 py-2 border border-gray-300 rounded-md">
            <p className="col-span-2 text-red-500 ">Subtotal:</p>
            <span>${price * quantity}.00</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(CartRow);
