import React from 'react';
import { Link } from 'react-router-dom';

function NoProduct() {
  return (
    <div className="flex flex-col items-center justify-center py-5">
      <div className="py-10">
        <img
          className="max-w-lg animate-bounce"
          alt="alt"
          src="https://speckyboy.com/wp-content/uploads/2022/02/404-page-web-design-inspiration-34.jpg"
        />
      </div>
      <div className="flex pb-12 space-x-5">
        <div>
          <Link to="/Contact">
            <button className="px-5 py-3 text-3xl text-white transform bg-red-500 rounded-md transition-all active:-translate-y-0.5 shadow-md hover:bg-red-400 hover:-translate-y-0.5 hover:shadow-xl">
              Contact us
            </button>
          </Link>
        </div>
        <Link to="/">
          <button className="px-5 py-3 text-3xl text-white transform bg-indigo-500 rounded-md transition-all active:-translate-y-0.5 shadow-md hover:bg-indigo-400 hover:-translate-y-0.5 hover:shadow-xl">
            Home
          </button>
        </Link>
      </div>
    </div>
  );
}

export default NoProduct;
