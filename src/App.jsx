import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import ProductDetail from './ProductDetail';
import { Routes, Route } from 'react-router-dom';
import ProductListPage from './ProductListPage';
import NoProduct from './NoProduct';
import Contact from './Contact';
import { useState } from 'react';
import CartPage from './CartPage';
let data = [];

function App() {
  let localData;
  localData = localStorage.getItem('cart');
  let D = JSON.parse(localData);

  const [cart, setCart] = useState({});

  function handleAddtoCart(productId, count) {
    const oldCount = cart[productId] || 0;
    const newCart = { ...cart, [productId]: +oldCount + count };
    setCart(newCart);
    data = { ...newCart };
    const cartString = JSON.stringify(newCart);
    localStorage.setItem('cart', cartString);
  }

  const totalCount = Object.keys(cart).reduce(function (previous, current) {
    return previous + cart[current];
  }, 0);

  return (
    <div className="flex flex-col bg-gray-100">
      <Navbar quantity={totalCount} />
      <div className="grow">
        <Routes>
          <Route index element={<ProductListPage />} />
          <Route
            path="/products/:id/"
            element={<ProductDetail onAddToCart={handleAddtoCart} />}
          />
          <Route path="*" element={<NoProduct />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/CartPage" element={<CartPage field={data} />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;
