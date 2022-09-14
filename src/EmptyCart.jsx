import React from 'react';
import { Link } from 'react-router-dom';

function EmptyCart() {
  return (
    <>
      <div className="flex flex-col items-center max-w-6xl mx-auto">
        <img
          className="max-w-sm py-10 md:py-5 md:max-w-lg"
          alt="empty cart"
          src="https://cdn.discordapp.com/attachments/1001427758028685332/1019521143738204231/empty_Cart.jpg"
        />
        <p className="px-4 py-10 text-base text-gray-500 md:py-5 md:text-2xl">
          Sorry got nothing here !!! to continue click on back to shopping....
        </p>
        <div className="pb-5 ">
          <Link to="/">
            <button className="px-2 py-1 text-xl text-white bg-indigo-500 rounded-md md:px-4 md:py-2 md:text-3xl">
              Back to shopping
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default EmptyCart;
