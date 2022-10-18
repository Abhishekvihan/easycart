import React, { memo } from 'react';
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
import CartProvider from './providers/CartProvider';

function App() {
  return (
    <div className="flex flex-col bg-gray-100">
      <UserProvider>
        <CartProvider>
          <AlertProvider>
            <Navbar />
            <Alert />

            <div className="grow">
              <Routes>
                <Route
                  path="/dashboard"
                  element={
                    <UserRoute>
                      <Dashboard />
                    </UserRoute>
                  }
                ></Route>
                <Route
                  index
                  path="/"
                  element={
                    <UserRoute>
                      <ProductListPage />
                    </UserRoute>
                  }
                />
                <Route path="/products/:id/" element={<ProductDetail />} />
                <Route path="*" element={<NoProduct />} />
                <Route path="/Contact" element={<Contact />} />
                <Route path="/CartPage" element={<CartPage />} />
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
        </CartProvider>
      </UserProvider>
    </div>
  );
}

export default memo(App);
