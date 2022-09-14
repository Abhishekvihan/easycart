import React from 'react';
import { useState } from 'react';

function CartRow({ src, title, price, field }) {
  const [quantity, setQuantity] = useState(2);
  console.log(field);

  return (
    <div className="max-w-6xl mx-auto">
      <div className="border border-gray-100">
        <div className="grid grid-cols-7 py-2 bg-white place-items-center justify-items-start">
          <div className="w-8 h-8 text-center text-gray-300 border border-gray-200 rounded-full">
            x
          </div>
          <img className="w-20 " src={src} alt="try casual" />
          <p className="col-span-2 px-16 text-red-500">{title}</p>
          <p className="px-16 ">${price}.00</p>
          <p className="px-16 ">
            <input
              className="w-8 text-center border border-gray-200 outline-0"
              type="number"
              value={() => (field = Object.value(field))}
              onChange={(event) => {
                setQuantity(event.target.value);
              }}
            />
          </p>
          <p className="px-16 ">${price * quantity}.00</p>
        </div>
      </div>
    </div>
  );
}

export default CartRow;
