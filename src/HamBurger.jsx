import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function HamBurger() {
  const [home, setHome] = useState(true);
  const [allProducts, setAllProducts] = useState(false);
  const [contact, setContact] = useState(false);
  const [about, setAbout] = useState(false);
  const [account, setAccount] = useState(false);
  return (
    <>
      <div className="flex flex-col">
        <ul className="pt-3">
          <Link to="/">
            <li
              onClick={() => {
                setAbout(false);
                setHome(true);
                setAllProducts(false);
                setContact(false);
                setAccount(false);
              }}
              className={
                home
                  ? 'py-5 text-xl text-red-500 transition-all delay-150 border-b border-gray-300 cursor-pointer'
                  : 'py-5 text-xl text-gray-800 hover:text-red-500 transition-all delay-150 border-b border-gray-300 cursor-pointer'
              }
            >
              Home
            </li>
          </Link>
          <li
            onClick={() => {
              setAbout(false);
              setHome(false);
              setAllProducts(true);
              setContact(false);
              setAccount(false);
            }}
            className={
              allProducts
                ? 'py-5 text-xl text-red-500 transition-all delay-150 border-b border-gray-300 cursor-pointer'
                : 'py-5 text-xl text-gray-800 hover:text-red-500 transition-all delay-150 border-b border-gray-300 cursor-pointer'
            }
          >
            All Products
          </li>
          <Link to="/Contact">
            <li
              onClick={() => {
                setAbout(false);
                setHome(false);
                setAllProducts(false);
                setContact(true);
                setAccount(false);
              }}
              className={
                contact
                  ? 'py-5 text-xl text-red-500 transition-all delay-150 border-b border-gray-300 cursor-pointer'
                  : 'py-5 text-xl text-gray-800 hover:text-red-500 transition-all delay-150 border-b border-gray-300 cursor-pointer'
              }
            >
              Contact
            </li>
          </Link>
          <li
            onClick={() => {
              setAbout(true);
              setHome(false);
              setAllProducts(false);
              setContact(false);
              setAccount(false);
            }}
            className={
              about
                ? 'py-5 text-xl text-red-500 transition-all delay-150 border-b border-gray-300 cursor-pointer'
                : 'py-5 text-xl text-gray-800 hover:text-red-500 transition-all delay-150 border-b border-gray-300 cursor-pointer'
            }
          >
            About
          </li>
          <li
            onClick={() => {
              setAbout(false);
              setHome(false);
              setAllProducts(false);
              setContact(false);
              setAccount(true);
            }}
            className={
              account
                ? 'py-5 text-xl text-red-500 transition-all delay-150 border-b border-gray-300 cursor-pointer'
                : 'py-5 text-xl text-gray-800 hover:text-red-500 transition-all delay-150 border-b border-gray-300 cursor-pointer'
            }
          >
            Account
          </li>
        </ul>
      </div>
    </>
  );
}

export default HamBurger;
