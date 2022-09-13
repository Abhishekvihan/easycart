import React from 'react';
import { Link } from 'react-router-dom';

function Product({ title, price, category, thumbnail, id }) {
  return (
    <div className="max-w-xs mt-4 mr-3 border border-gray-300 rounded-md shadow hover:shadow-xl lg:mr-0 aspect-square ">
      <Link to={'/products/' + id}>
        <div className="w-64 h-64 lg:w-80 lg:h-80 ">
          <span>
            <img
              alt="try"
              className="object-cover w-full h-full mr-4 cursor-pointer rounded-t-md"
              src={thumbnail}
            />
          </span>
        </div>
        <div className="px-5 pb-4">
          <h2 className="pt-2 text-xs text-gray-500 font-extralight">
            {category}
          </h2>
          <span href="/">
            <p className="pt-2 font-bold tracking-wide text-gray-600 ">
              {title}
            </p>
          </span>
          <h3 className="font-bold text-gray-600 font-sm">${price}</h3>
          <p className="text-xs">⭐⭐⭐⭐⭐</p>
        </div>
      </Link>
    </div>
  );
}

export default Product;
