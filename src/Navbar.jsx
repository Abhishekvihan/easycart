import React from 'react';
import { useState } from 'react';
import { BsBag } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import HamBurger from './HamBurger';
import { memo } from 'react';
import { HiOutlineHome } from 'react-icons/hi';
import { withCart } from './withProvider';

function Navbar({ CartCount }) {
  const [menu, setMenu] = useState(false);
  function closeMenu(a) {
    if (a === true) {
      setMenu(false);
    }
  }
  return (
    <div className="py-5 bg-white border border-b-gray-400">
      <div className="flex items-center justify-between max-w-6xl mx-auto">
        <div>
          <Link to="/">
            <img
              alt="try"
              src="https://trycasuals.com/wp-content/uploads/2019/06/print-1-1.svg"
            />
          </Link>
        </div>
        <div className="flex justify-between space-x-5">
          <div className="hidden space-x-5 md:flex">
            <div className="self-center">
              <Link to="/">
                <HiOutlineHome className="text-3xl text-indigo-500 " />
              </Link>
            </div>
            <Link to="/Login">
              <button className="px-4 py-2 text-gray-800 border border-gray-400 rounded-md shadow-md">
                Login
              </button>
            </Link>
            <Link to="/SignUp">
              <button className="px-4 py-2 text-white bg-indigo-400 rounded-md shadow-md">
                SignUp
              </button>
            </Link>
          </div>
          <div className="relative self-start inline">
            <Link to="/CartPage">
              <BsBag className="items-center inline text-3xl text-red-500 " />

              <div className="absolute inset-2">{+CartCount}</div>
            </Link>
          </div>
          <div className="relative flex text-2xl md:hidden">
            <div
              className="absolute cursor-pointer top-2 right-16"
              onClick={() => {
                setMenu(!menu);
              }}
            >
              {menu ? <AiOutlineClose /> : <AiOutlineMenu />}
            </div>
            <div className="transition ease-in-out delay-150">
              <div
                className={
                  menu
                    ? 'w-screen px-5 left-0 transition-all  h-96 '
                    : 'hidden '
                }
              >
                <HamBurger className="font-light" closeMenu={closeMenu} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default withCart(memo(Navbar));
