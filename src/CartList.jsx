import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CartRow from './CartRow';
import { BsArrowLeft } from 'react-icons/bs';
import EmptyCart from './EmptyCart';

function CartList({ products, cart, setCart, updateCart }) {
  const [localcart, setLocalCart] = useState(cart);
  useEffect(
    function () {
      setLocalCart(cart);
    },
    [cart]
  );

  function handleUpdateCart() {
    updateCart(localcart);
    localStorage.clear();
    localStorage.setItem('cart', JSON.stringify(localcart));
  }

  if (products.length === 0) {
    return <EmptyCart />;
  }
  function handleQunatityChange(productId, newValue) {
    const newlocalCart = { ...localcart, [productId]: newValue };
    setLocalCart(newlocalCart);
  }

  return (
    <div className="p-10 ">
      <Link className="pb-5" to="/">
        <BsArrowLeft className="inline text-3xl" />
      </Link>
      <div className="hidden grid-cols-7 bg-gray-100 border border-gray-200 md:grid">
        <p className="col-span-2"></p>
        <p className="col-span-2">Product</p>
        <p className="">Price</p>
        <p className="">Quantity</p>
        <p className="justify-self-start">Subtotal</p>
        <div></div>
      </div>
      {products.length > 0 &&
        products.map((item) => (
          <CartRow
            src={item.thumbnail}
            title={item.title}
            id={item.id}
            key={item.id}
            price={item.price}
            cart={cart}
            setCart={setCart}
            onQunatityChange={handleQunatityChange}
            localcart={localcart}
          />
        ))}
      <div className="flex justify-between py-2 border border-gray-200 rounded-md borde">
        <div className="flex space-x-2">
          <input
            className="px-2 py-1 text-xs text-center border border-gray-600 rounded-md sm:text-sm md:w-48 w-36 md:px-4 md:py-2 md:text-lg outline-0"
            type="text"
            placeholder="Coupon Code"
          />
          <button className="px-2 py-1 text-xs text-white bg-red-500 rounded-md sm:text-sm md:px-4 md:py-2 md:text-lg">
            Apply Coupon
          </button>
        </div>
        <button
          onClick={handleUpdateCart}
          className="px-2 py-1 text-xs text-gray-600 bg-red-400 rounded-md sm:text-sm md:px-4 md:py-2 md:text-lg"
        >
          Update Cart
        </button>
      </div>
      <div className="grid grid-cols-2 py-2 ">
        <div className="grid-span-1">
          <p></p>
        </div>
        <div className="flex flex-col bg-white border border-gray-200">
          <p className="px-2 py-1 text-base bg-gray-100 md:px-4 md:py-2 md:text-lg">
            Cart Total
          </p>
          <p className="px-2 py-1 text-base md:px-4 md:py-2 md:text-lg">
            Subtotal
          </p>
          <p className="px-2 py-1 text-base md:px-4 md:py-2 md:text-lg">
            Total
          </p>
          <div className="flex justify-center py-2">
            <button className="px-5 py-2 text-xs text-center text-white bg-red-500 rounded-md md:px-16 sm:text-base md:text-lg">
              Proceed to checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartList;
