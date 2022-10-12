import React from 'react';
import { useEffect } from 'react';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import { MdOutlineDangerous } from 'react-icons/md';
import { withAlert } from './withProvider';

const themeMap = {
  success: {
    color: 'bg-green-500',
    Icon: AiOutlineCheckCircle,
  },
  error: {
    color: 'bg-red-600',
    Icon: MdOutlineDangerous,
  },
};

function Alert({ alert, removeAlert }) {
  useEffect(() => {
    if (alert) {
      const dismissTimer = setTimeout(removeAlert, 3 * 1000);
      return function () {
        clearTimeout(dismissTimer);
      };
    }
  }, [alert, removeAlert]);

  if (!alert) {
    return;
  }

  const { message, type } = alert;
  const { Icon, color } = themeMap[type];

  return (
    <>
      <div className="flex items-center justify-center px-4 ">
        <div
          role="alert"
          id="alert"
          className="flex flex-col items-center justify-between w-full py-4 mx-auto transition duration-150 ease-in-out bg-white border border-gray-400 rounded shadow lg:w-11/12 md:py-0 md:flex-row"
        >
          <div className="flex flex-col items-center md:flex-row">
            <div
              className={
                'p-4 mr-3 text-white  rounded md:rounded-tr-none md:rounded-br-none ' +
                color
              }
            >
              <Icon className="text-lg" />
            </div>

            <p className="mt-2 mr-2 text-base font-bold text-gray-800 md:my-0">
              {type}
            </p>
            <div className="hidden w-1 h-1 mr-2 bg-gray-300 rounded-full xl:block"></div>
            <p className="mb-2 text-sm text-center text-gray-600 lg:text-base lg:pt-1 xl:pt-0 sm:mb-0 sm:text-left">
              {message}
            </p>
          </div>
          <div className="flex justify-center pr-4 xl:items-center lg:items-center sm:justify-end">
            <button
              onClick={removeAlert}
              className="text-sm text-gray-600 cursor-pointer focus:outline-none focus:text-gray-400 hover:text-gray-400 "
            >
              Dismiss
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default withAlert(Alert);
