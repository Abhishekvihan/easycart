/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      width: {
        128: '32rem',
      },
      scale: {
        200: '2.00',
        250: '2.50',
      },
    },
  },
};
