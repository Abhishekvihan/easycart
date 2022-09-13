import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Loading from './Loading';

import {
  HiArrowNarrowLeft,
  HiOutlineChevronRight,
  HiOutlineChevronLeft,
} from 'react-icons/hi';
import { getProductData } from './api';
import NoProduct from './NoProduct';

function ProductDetail({ onAddToCart }) {
  const id = +useParams().id;
  const [count, setCount] = useState(1);
  const [product, setProduct] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const p = getProductData(id);
    p.then((response) => {
      setProduct(response.data);
      setLoading(false);
    }).catch(() => {
      setLoading(false);
    });
  }, [id]);

  if (!product) {
    return loading ? <Loading /> : <NoProduct />;
  }
  return (
    <div className="grow">
      <div className="pl-10">
        <Link to="/">
          <HiArrowNarrowLeft className="inline text-3xl" />
        </Link>
      </div>
      <div className="p-10 bg-gray-100 ">
        <div className="max-w-6xl mx-auto bg-gray-200">
          <div className="flex flex-col p-3 mb-5 ease-in-out bg-white border border-gray-400 md:flex-row">
            <div className="md:mr-5 w-68 hover:inline-block md:w-96 md:h-96 hover:w-full hover:h-full">
              <img
                alt="try"
                className="object-cover w-full h-full mr-10 transition-all hover:scale-150 hover:will-change-scroll hover:object-none"
                src={product.thumbnail}
              />
            </div>
            <div className="max-w-3xl">
              <h1 className="text-2xl text-gray-600 md:text-4xl ">
                {product.title}
              </h1>
              <h2 className="pt-8 pb-8 text-2xl font-bold text-gray-700 md:text-3xl">
                ${product.price}.00
              </h2>
              <p className="text-base text-gray-600 md:text-xl">
                {product.description}
              </p>
              <div className="pt-8">
                <input
                  className="w-12 px-2 py-2 mr-4 text-sm text-center border border-gray-500 rounded-md md:text-xl md:px-4 w-15 md:w-20 outline-0"
                  value={count}
                  onChange={(event) => {
                    setCount(+event.target.value);
                  }}
                  type="number"
                />
                <button
                  onClick={() => onAddToCart(+id, +count)}
                  className="px-4 py-2 text-sm text-white bg-red-500 rounded-md shadow-lg hover:bg-red-400 md:px-6 md:text-xl"
                >
                  ADD TO CART
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between">
          <div>
            {!(id <= 1) && (
              <Link to={'/products/' + (id - 1)}>
                <HiOutlineChevronLeft
                  className="text-3xl"
                  onClick={() => {
                    setCount(1);
                  }}
                />
              </Link>
            )}
          </div>
          <div>
            <Link to={'/products/' + (id + 1)}>
              <HiOutlineChevronRight
                className="text-3xl"
                onClick={() => {
                  setCount(1);
                }}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
