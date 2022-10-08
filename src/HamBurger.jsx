import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function HamBurger({ closeMenu }) {
  const [home, setHome] = useState(true);
  const [allProducts, setAllProducts] = useState(false);
  const [contact, setContact] = useState(false);
  const [about, setAbout] = useState(false);
  const [account, setAccount] = useState(false);
  return (
    <>
      <div className="flex flex-col my-4">
        <ul className="pt-3">
          <Link to="/">
            <li
              onClick={() => {
                setAbout(false);
                setHome(true);
                setAllProducts(false);
                setContact(false);
                setAccount(false);
                closeMenu(true);
              }}
              className={
                home
                  ? 'py-5 text-xl text-red-500 transition-all delay-100 border-b border-gray-300 cursor-pointer'
                  : 'py-5 text-xl text-gray-800 hover:text-red-500 transition-all delay-150 border-b border-gray-300 cursor-pointer'
              }
            >
              Home
            </li>
          </Link>
          <Link to="/productlist">
            <li
              onClick={() => {
                setAbout(false);
                setHome(false);
                setAllProducts(true);
                setContact(false);
                setAccount(false);
                closeMenu(true);
              }}
              className={
                allProducts
                  ? 'py-5 text-xl text-red-500 transition-all delay-100 border-b border-gray-300 cursor-pointer'
                  : 'py-5 text-xl text-gray-800 hover:text-red-500 transition-all delay-150 border-b border-gray-300 cursor-pointer'
              }
            >
              All Products
            </li>
          </Link>
          <Link to="/Contact">
            <li
              onClick={() => {
                setAbout(false);
                setHome(false);
                setAllProducts(false);
                setContact(true);
                setAccount(false);
                closeMenu(true);
              }}
              className={
                contact
                  ? 'py-5 text-xl text-red-500 transition-all delay-100 border-b border-gray-300 cursor-pointer'
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
              closeMenu(true);
            }}
            className={
              about
                ? 'py-5 text-xl text-red-500 transition-all delay-100 border-b border-gray-300 cursor-pointer'
                : 'py-5 text-xl text-gray-800 hover:text-red-500 transition-all delay-150 border-b border-gray-300 cursor-pointer'
            }
          >
            About
          </li>
          <Link to="/Signup">
            <li
              onClick={() => {
                setAbout(false);
                setHome(false);
                setAllProducts(false);
                setContact(false);
                setAccount(true);
                closeMenu(true);
              }}
              className={
                account
                  ? 'py-5 text-xl text-red-500 transition-all delay-100 border-b border-gray-300 cursor-pointer'
                  : 'py-5 text-xl text-gray-800 hover:text-red-500 transition-all delay-150 border-b border-gray-300 cursor-pointer'
              }
            >
              Account
            </li>
          </Link>
        </ul>
      </div>
    </>
  );
}

export default HamBurger;
