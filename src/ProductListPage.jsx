import React, { useEffect, useState } from 'react';
import ProductList from './ProductList';
import { getProductList } from './api';
import NoMatching from './NoMatching';
import Loading from './Loading';
import NoProduct from './NoProduct';
import { range } from 'lodash';
import { BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';
import { Link, useSearchParams } from 'react-router-dom';

function ProductListPage() {
  const [productList, setproductList] = useState({});
  const [loading, setLoading] = useState(true);
  //eslint-disable-next-line
  let [searchParams, setSearchParams] = useSearchParams();

  const Params = Object.fromEntries([...searchParams]);
  let { query, sort, page } = Params;
  page = +page || 1;

  query = query || '';
  sort = sort || 'default';

  useEffect(
    function () {
      let sortBy;
      let sortType;

      if (sort === 'title') {
        sortBy = 'title';
      } else if (sort === 'lowToHigh') {
        sortBy = 'price';
      } else if (sort === 'highToLow') {
        sortBy = 'price';
        sortType = 'desc';
      }
      getProductList(sortBy, query, page, sortType)
        .then((body) => {
          setproductList(body);
          setLoading(false);
        })
        .catch(() => {
          setLoading(false);
          return <NoProduct />;
        });
    },
    [sort, query, page]
  );

  let data = productList.data;
  function handleQueryChange(event) {
    setSearchParams(
      { ...Params, query: event.target.value, page: 1 },
      { replace: false }
    );
  }
  function handleSortChange(event) {
    setSearchParams(
      { ...Params, sort: event.target.value },
      { replace: false }
    );
  }
  if (productList.length === 0) {
    return (
      <div className="py-10">
        <Loading />
      </div>
    );
  }
  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <div className="max-w-6xl px-8 py-16 mx-auto mt-10 bg-white grow">
        <div className="flex flex-wrap justify-center sm:justify-between gap-x-16 gap-y-8">
          <input
            value={query}
            placeholder="Search"
            className="w-48 px-4 py-2 border border-gray-400 rounded-md outline-0"
            onChange={handleQueryChange}
          />
          <select
            onChange={handleSortChange}
            value={sort}
            className="w-48 px-3 py-2 text-gray-500 border border-gray-300 rounded-md outline-0"
          >
            <option value="default">Default sorting</option>
            <option value="title">Sort by title</option>
            <option value="lowToHigh">Sort by Price: low to high</option>
            <option value="highToLow">Sort by Price: high to low</option>
          </select>
        </div>
      </div>
      {data.length > 0 && <ProductList products={data} />}
      {data.length === 0 && (
        <div className="p-10">
          <NoMatching />
        </div>
      )}
      {productList.meta.current_page > 1 && (
        <Link
          to={
            '?' +
            new URLSearchParams({
              ...Params,
              page: productList.meta.current_page - 1,
            })
          }
          className="inline-block px-2 pt-3 pb-4 ml-2 -mb-4 text-xl transition-all bg-white border border-gray-400 cursor-pointer hover:bg-red-500 hover:text-white"
        >
          <BsArrowLeftShort />
        </Link>
      )}
      {range(1, productList.meta.last_page + 1).map((item, i) => (
        <div key={item} className="inline-block mb-2 ml-2">
          <Link
            to={'?' + new URLSearchParams({ ...Params, page: item })}
            className={
              page === i + 1
                ? 'p-4 border   cursor-pointer mb-2  border-gray-400 transition-all hover:bg-red-500 bg-red-500 text-white'
                : 'p-4 border  border-gray-400 cursor-pointer transition-all bg-white hover:bg-red-500 hover:text-white'
            }
          >
            {item}
          </Link>
        </div>
      ))}
      <div className="inline">
        {page < productList.meta.last_page && (
          <Link
            to={
              '?' +
              new URLSearchParams({
                ...Params,
                page: productList.meta.current_page + 1,
              })
            }
            className="inline-block px-2 pt-3 pb-4 ml-2 -mb-4 text-xl transition-all bg-white border border-gray-400 cursor-pointer hover:bg-red-500 hover:text-white"
          >
            <BsArrowRightShort />
          </Link>
        )}
      </div>
    </>
  );
}

export default ProductListPage;
