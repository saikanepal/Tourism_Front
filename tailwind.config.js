/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'jomolhari' : ['Jomolhari','serif'],
        'Poppins' : ['Poppins','sans-serif']
      
      },
    },
  },
  plugins: [],
};