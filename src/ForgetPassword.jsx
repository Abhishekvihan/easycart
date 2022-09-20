import { useFormik } from 'formik';
import React, { memo } from 'react';
import { HiOutlineMail } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';

function ForgetPassword() {
  const schema = Yup.object().shape({
    email: Yup.string().email().required(),
  });
  const {
    handleSubmit,
    values,
    handleChange,
    handleBlur,
    errors,
    touched,
    isValid,
  } = useFormik({
    initialValues: {
      email: '',
    },
    onSubmit: handleFormSubmit,
    validationSchema: schema,
  });
  function handleFormSubmit() {
    console.log('submitting', values.email);
  }
  return (
    <>
      <div className="p-8 bg-white pb-28 md:pb-24 lg:pb-10 xl:pb-8">
        <div className="max-w-6xl mx-auto shadow-md">
          <div className="flex border border-gray-400 rounded-md">
            <div className="flex flex-col items-center justify-center w-full bg-gradient-to-br from-gray-200 md:w-1/2">
              <img
                className="pt-10 w-60 "
                src="https://cdn.discordapp.com/attachments/1001427758028685332/1021484291647078420/cart.png"
                alt="cart"
              />
              <div className="text-center">
                <p className="py-8 font-mono text-base text-gray-600 md:xl ">
                  Enter your E-mail and we will send you a link to reset your
                  password.
                </p>
              </div>
              <form
                onSubmit={handleSubmit}
                className="flex flex-col items-center gap-y-8"
              >
                <div className="relative">
                  <label htmlFor="email" className="sr-only md:flex" />
                  <input
                    name="email"
                    value={values.email}
                    id="email"
                    type="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="E-mail"
                    className="w-64 px-8 py-2 border border-gray-400 rounded-md outline-none sm:w-96 md:w-80"
                  />
                  <HiOutlineMail className="absolute text-2xl text-gray-500 top-2" />
                  {touched.email && errors.email && (
                    <div className="text-red-600">{errors.email}</div>
                  )}
                </div>

                <div className="pb-4 ">
                  <button
                    type="submit"
                    disabled={!isValid}
                    className="w-64 px-10 py-2 text-white transition-all bg-indigo-600 rounded-md disabled:bg-indigo-300 sm:w-96 md:w-80text-center md:w-auto hover:bg-indigo-500 "
                  >
                    Continue
                  </button>
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
            <div className="hidden w-1/2 md:flex ">
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
                  <p className="pb-4 text-2xl text-blue-700 hover:underline">
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

export default memo(ForgetPassword);
