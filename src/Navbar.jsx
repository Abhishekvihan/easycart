import React from 'react';
import { BsBag } from 'react-icons/bs';
import { Link } from 'react-router-dom';
function Navbar({ quantity }) {
  return (
    <div className="py-5 bg-white">
      <div className="flex justify-between max-w-6xl mx-auto">
        <img
          alt="try"
          src="https://trycasuals.com/wp-content/uploads/2019/06/print-1-1.svg"
        />
        <div className="relative flex felx-col">
          <Link to="/CartPage">
            <BsBag className="items-center text-3xl text-red-500 " />

            <div className="absolute inset-2">{quantity}</div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
