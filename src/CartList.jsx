import React from 'react';
// import { getProductData, getProductList } from './api';
import CartRow from './CartRow';

function CartList({ products }) {
  return (
    <div className="max-w-6xl p-10 mx-auto">
      <div className="grid grid-cols-6 bg-gray-100 border border-gray-200 place-items-end">
        <p className="col-span-1"></p>
        <p className="col-span-2 pr-20">Product</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Subtotal</p>
      </div>
      {products.map((item) => (
        <CartRow
          src={item.thumbnail}
          title={item.title}
          id={item.id}
          key={item.id}
          price={item.price}
          quantity={products.data}
        />
      ))}
      <div className="flex justify-between py-2 border border-gray-200 rounded-md borde">
        <div className="flex space-x-2">
          <input
            className="px-4 py-2 text-lg text-center border border-gray-600 rounded-md outline-0"
            type="text"
            placeholder="Coupon Code"
          />
          <button className="px-4 py-2 text-lg text-white bg-red-500 rounded-md">
            Apply Coupon
          </button>
        </div>
        <button className="px-4 py-2 text-lg text-gray-600 bg-red-400 rounded-md">
          Update Cart
        </button>
      </div>
      <div className="grid grid-cols-2 py-2 ">
        <div className="grid-span-1">
          <p></p>
        </div>
        <div className="flex flex-col bg-white border border-gray-200">
          <p className="px-4 py-2 text-lg bg-gray-100">Cart Total</p>
          <p className="px-4 py-2 text-lg">Subtotal</p>
          <p className="px-4 py-2 text-lg">Total</p>
          <div className="flex justify-center py-2">
            <button className="px-16 py-2 text-center text-white bg-red-500 rounded-md">
              Proceed to checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartList;
