import React from 'react';
import { useState } from 'react';
import { BsBag } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';
import HamBurger from './HamBurger';

function Navbar({ quantity }) {
  const [hamburger, setHamburger] = useState(false);
  return (
    <div className="py-5 bg-white">
      <div className="flex items-center justify-between max-w-6xl mx-auto">
        <div>
          <img
            alt="try"
            src="https://trycasuals.com/wp-content/uploads/2019/06/print-1-1.svg"
          />
        </div>
        <div className="flex justify-between">
          <div className="relative self-start inline">
            <Link to="/CartPage">
              <BsBag className="items-center inline text-3xl text-red-500 " />

              <div className="absolute inset-2">{quantity}</div>
            </Link>
          </div>
          <div className="relative flex text-2xl md:hidden">
            <div
              className="absolute cursor-pointer top-2 right-16"
              onClick={() => {
                setHamburger(!hamburger);
              }}
            >
              {hamburger ? <AiOutlineClose /> : <GiHamburgerMenu />}
            </div>
            <div className="transition ease-in-out delay-150">
              <div
                className={
                  hamburger
                    ? 'w-screen px-5 left-0 transition-all  h-96 '
                    : 'hidden '
                }
              >
                <HamBurger />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
