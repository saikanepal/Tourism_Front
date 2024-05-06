/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'jomolhari' : ['Jomolhari','serif']
      }, colors: {
        'custom-yellow': '#ca8f30',
      },
    },
  },
  plugins: [],
};