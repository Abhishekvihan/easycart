import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductList from './ProductList';
import { getProductList } from './api';
import NoMatching from './NoMatching';
import { HiArrowRight } from 'react-icons/hi';
import Loading from './Loading';
import NoProduct from './NoProduct';

function ProductListPage() {
  const [query, setQuery] = useState('');
  const [sort, setSort] = useState('default');
  const [productList, setproductList] = useState([]);
  const [active1, setActive1] = useState(true);
  const [active2, setActive2] = useState();
  const [active3, setActive3] = useState();
  const [active4, setActive4] = useState();
  useEffect(function () {
    const list = getProductList();
    list
      .then((response) => {
        setproductList(response.data.products);
      })
      .catch(() => {
        return <NoProduct />;
      });
  }, []);

  let data = productList.filter(function (item) {
    const lowerCaseTitle = item.title.toLowerCase();
    const lowerCaseQuery = query.toLowerCase();
    return lowerCaseTitle.indexOf(lowerCaseQuery) !== -1;
  });

  if (sort === 'ascending price') {
    data.sort(function (x, y) {
      return x.price - y.price;
    });
  } else if (sort === 'descending price') {
    data.sort(function (x, y) {
      return y.price - x.price;
    });
  } else if (sort === 'name') {
    data.sort(function (x, y) {
      return x.title < y.title ? -1 : 1;
    });
  }

  function handleQueryChange(event) {
    setQuery(event.target.value);
  }
  function handleSortChange(event) {
    setSort(event.target.value);
  }
  if (productList.length === 0) {
    return (
      <div className="py-10">
        <Loading />
      </div>
    );
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
            <option value="name">Sort by title</option>
            <option value="ascending price">Sort by Price: low to high</option>
            <option value="descending price">Sort by Price: high to low</option>
          </select>
        </div>
      </div>
      {data.length > 0 && <ProductList products={data} />}
      {data.length === 0 && (
        <div className="p-10">
          <NoMatching />
        </div>
      )}
      <div className="max-w-6xl py-20 mx-auto space-x-2">
        <span
          onClick={() => {
            setActive1(true);
            setActive3(false);
            setActive2(false);
            setActive4(false);
            let next = axios.get(
              'https://dummyjson.com/products?limit=30&skip=0&select=title,price,description,thumbnail'
            );
            next.then((res) => {
              setproductList(res.data.products);
            });
          }}
          className={
            active1
              ? 'p-4 border cursor-pointer border-gray-400 transition-all hover:bg-red-500 bg-red-500 hover:text-white'
              : 'p-4 border border-gray-400 cursor-pointer transition-all bg-white hover:bg-red-500 hover:text-white'
          }
        >
          1
        </span>
        <span
          onClick={() => {
            setActive1(false);
            setActive3(false);
            setActive2(true);
            setActive4(false);
            let next = axios.get(
              'https://dummyjson.com/products?limit=30&skip=30&select=title,price,description,thumbnail'
            );
            next.then((res) => {
              setproductList(res.data.products);
            });
          }}
          className={
            active2
              ? 'p-4 border cursor-pointer border-gray-400 transition-all hover:bg-red-500 bg-red-500 hover:text-white'
              : 'p-4 border border-gray-400 cursor-pointer transition-all bg-white hover:bg-red-500 hover:text-white'
          }
        >
          2
        </span>
        <span
          onClick={() => {
            setActive1(false);
            setActive3(true);
            setActive2(false);
            setActive4(false);
            let next = axios.get(
              'https://dummyjson.com/products?limit=30&skip=60&select=title,price,description,thumbnail'
            );
            next.then((res) => {
              setproductList(res.data.products);
            });
          }}
          className={
            active3
              ? 'p-4 border cursor-pointer border-gray-400 transition-all hover:bg-red-500 bg-red-500 hover:text-white'
              : 'p-4 border border-gray-400 cursor-pointer transition-all bg-white hover:bg-red-500 hover:text-white'
          }
        >
          3
        </span>
        <span
          className={
            active4
              ? 'px-3 py-4 border cursor-pointer border-gray-400 transition-all hover:bg-red-500 bg-red-500 hover:text-white'
              : 'px-3 py-4  border border-gray-400 cursor-pointer transition-all bg-white hover:bg-red-500 hover:text-white'
          }
          onClick={() => {
            setActive1(false);
            setActive3(false);
            setActive2(false);
            setActive4(true);
            let next = axios.get(
              'https://dummyjson.com/products?limit=10&skip=90&select=title,price,description,thumbnail'
            );
            next.then((res) => {
              setproductList(res.data.products);
            });
          }}
        >
          <HiArrowRight className="inline" />
        </span>
      </div>
    </>
  );
}

export default ProductListPage;
