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
import { useEffect } from 'react';
import axios from 'axios';
import UserRoute from './UserRoute';
import AuthRoute from './AuthRoute';
import Loading from './Loading';
let data = [];

function App() {
  let localData;
  localData = localStorage.getItem('cart');
  let D = JSON.parse(localData);

  const [cart, setCart] = useState(D || {});
  const [user, setUser] = useState();
  const [loadingUser, setLoadingUser] = useState(true);
  console.log(user);
  data = D;
  const token = localStorage.getItem('token');
  console.log(token);

  useEffect(() => {
    if (token) {
      axios
        .get('https://myeasykart.codeyogi.io/me', {
          headers: {
            Authorization: token,
          },
        })
        .then((response) => {
          setUser(response.data);
          setLoadingUser(false);
        });
    } else {
      setLoadingUser(false);
    }
    // eslint-disable-next-line
  }, []);

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

  if (loadingUser) {
    return <Loading />;
  }

  return (
    <div className="flex flex-col bg-gray-100">
      <Navbar quantity={totalCount} />

      <div className="grow">
        <Routes>
          <Route
            index
            path="/"
            element={
              <UserRoute user={user}>
                <Dashboard user={user} setUser={setUser} />{' '}
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
              <AuthRoute user={user}>
                <Signup user={user} setUser={setUser} />
              </AuthRoute>
            }
          />
          <Route
            path="/Login"
            element={
              <AuthRoute user={user}>
                <Login setUser={setUser} />
              </AuthRoute>
            }
          />
          <Route path="/ForgetPassword" element={<ForgetPassword />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default memo(App);
