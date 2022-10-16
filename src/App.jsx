import React, { memo, useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import ProductDetail from './ProductDetail';
import { Routes, Route } from 'react-router-dom';
import ProductListPage from './ProductListPage';
import NoProduct from './NoProduct';
import Contact from './Contact';
import CartPage from './CartPage';
import Signup from './Signup';
import Login from './Login';
import ForgetPassword from './ForgetPassword';
import Dashboard from './Dashboard';
import UserRoute from './UserRoute';
import AuthRoute from './AuthRoute';
import Alert from './Alert';
import UserProvider from './providers/UserProvider';
import AlertProvider from './providers/AlertProvider';
let data = [];

function App() {
  let localData;
  localData = localStorage.getItem('cart');
  let D = JSON.parse(localData);

  const [cart, setCart] = useState(D || {});

  data = D;

  function handleAddtoCart(productId, count) {
    const oldCount = cart[productId] || 0;
    const newCart = { ...cart, [productId]: +oldCount + count };
    setCart(newCart);

    const cartString = JSON.stringify(newCart);
    localStorage.setItem('cart', cartString);
  }

  const totalCount = Object.keys(cart).reduce(function (previous, current) {
    return +previous + Number(cart[current]);
  }, 0);

  return (
    <div className="flex flex-col bg-gray-100">
      <UserProvider>
        <AlertProvider>
          <Navbar quantity={totalCount} />
          <Alert />

          <div className="grow">
            <Routes>
              <Route
                index
                path="/"
                element={
                  <UserRoute>
                    <Dashboard />
                  </UserRoute>
                }
              ></Route>
              <Route path="/productlist" element={<ProductListPage />} />
              <Route
                path="/products/:id/"
                element={<ProductDetail onAddToCart={handleAddtoCart} />}
              />
              <Route path="*" element={<NoProduct />} />
              <Route path="/Contact" element={<Contact />} />
              <Route
                path="/CartPage"
                element={<CartPage setCart={setCart} cart={data} />}
              />
              <Route
                path="/Signup"
                element={
                  <AuthRoute>
                    <Signup />
                  </AuthRoute>
                }
              />
              <Route
                path="/Login"
                element={
                  <AuthRoute>
                    <Login />
                  </AuthRoute>
                }
              />
              <Route path="/ForgetPassword" element={<ForgetPassword />} />
            </Routes>
          </div>
          <Footer />
        </AlertProvider>
      </UserProvider>
    </div>
  );
}

export default memo(App);
