import React from 'react';
import { Link } from 'react-router-dom';

function EmptyCart() {
  return (
    <>
      <div className="flex flex-col items-center max-w-6xl mx-auto">
        <img
          className="max-w-lg py-5"
          alt="empty cart"
          src="https://cdn.discordapp.com/attachments/1001427758028685332/1019521143738204231/empty_Cart.jpg"
        />
        <p className="py-5 text-2xl text-gray-500">
          Sorry got nothing here !!! to continue click on back to shopping....
        </p>
        <div className="pb-5 ">
          <Link to="/">
            <button className="px-4 py-2 text-3xl text-white bg-indigo-500 rounded-md">
              Back to shopping
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default EmptyCart;
