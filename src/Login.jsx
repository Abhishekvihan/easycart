import { useFormik } from 'formik';
import React, { memo, useState } from 'react';
import { BsShieldLock } from 'react-icons/bs';
import { HiOutlineMail } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';

function Login() {
  const schema = Yup.object().shape({
    email: Yup.string().email().required(),
    password: Yup.string().required().min(8).max(16),
  });
  const {
    handleSubmit,
    values,
    handleChange,
    errors,
    handleBlur,
    touched,
    isValid,
  } = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: handleFormSubmit,
    validationSchema: schema,
  });
  function handleFormSubmit() {
    console.log('submitting', values.email, values.password);
  }
  const [password, setpassword] = useState(true);
  return (
    <>
      <div className="p-8 bg-white">
        <div className="max-w-6xl mx-auto shadow-md">
          <div className="flex border border-gray-400 rounded-md">
            <div className="flex flex-col items-center justify-center w-full bg-gradient-to-br from-gray-200 md:w-1/2">
              <img
                className="pt-10 w-60 "
                src="https://cdn.discordapp.com/attachments/1001427758028685332/1021484291647078420/cart.png"
                alt="cart"
              />
              <p className="py-8 font-mono text-2xl text-gray-600 md:4xl lg:text-4xl">
                Log into Print!!
              </p>
              <form
                onSubmit={handleSubmit}
                className="flex flex-col items-center gap-y-8"
              >
                <div className="relative">
                  <label htmlFor="email" className="sr-only md:flex" />
                  <input
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    id="email"
                    type="email"
                    placeholder="E-mail"
                    className="w-64 px-8 py-2 border border-gray-400 rounded-md outline-none sm:w-96 md:w-80"
                  />
                  <HiOutlineMail className="absolute text-2xl text-gray-500 top-2" />
                  {touched.email && errors.email && (
                    <div className="text-red-600">{errors.email}</div>
                  )}
                </div>

                <div className="flex flex-col items-center">
                  <div className="relative">
                    <label htmlFor="password" className="sr-only" />
                    <input
                      name="password"
                      value={values.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      id="password"
                      type={password ? 'password' : 'text'}
                      placeholder=" Enter Password"
                      className="w-64 px-8 py-2 border border-gray-400 rounded-md outline-none sm:w-96 md:w-80"
                    />
                    <BsShieldLock className="absolute text-2xl text-gray-500 top-2" />
                    {touched.password && errors.password && (
                      <div className="text-red-600">{errors.password}</div>
                    )}
                  </div>

                  <label htmlFor="showpassword" />
                  <div className="flex items-center justify-center space-x-5">
                    <p className="text-sm text-gray-400 ">Show Password</p>
                    <input
                      onClick={() => {
                        setpassword(!password);
                      }}
                      id="showpassword"
                      type="checkbox"
                      placeholder="Show Password"
                    />
                  </div>
                </div>

                <div className="flex items-center w-64 pb-4 md:gap-x-2 gap-x-2 ">
                  <button
                    type="submit"
                    disabled={!isValid}
                    className="px-10 py-2 text-center disabled:bg-indigo-300  text-white transition-all bg-indigo-600 rounded-md md:w-auto hover:bg-indigo-500 "
                  >
                    Log-in
                  </button>
                  <Link to="/ForgetPassword">
                    <p className="text-sm text-blue-500 hover:underline">
                      Forgot password?
                    </p>
                  </Link>
                </div>
                <div className="flex items-center justify-center pb-4 md:hidden">
                  <h2 className="text-xl text-gray-600 ">
                    Don't have an account?
                  </h2>
                  <Link to="/Signup">
                    <p className="px-2 text-xl text-blue-700 hover:underline">
                      Sign-Up
                    </p>
                  </Link>
                </div>
              </form>
            </div>
            <div className="hidden w-1/2 md:flex">
              <div className="flex flex-col items-center justify-center w-full ">
                <img
                  className="w-128"
                  alt="login "
                  src="https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-83.jpg?w=2000"
                />
                <h2 className="py-3 text-xl text-gray-600">
                  Don't have an account?
                </h2>
                <Link to="/Signup">
                  <p className="pb-2 text-2xl text-blue-700 hover:underline">
                    Sign-up
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default memo(Login);
