/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      'black': '#000',
      'white': '#fff',
      'primary': '#18DD96',
      'secondary': '#C50000'
    },
    fontFamily: {
      'swis': ["swis721-blk-bt-black", 'sans-serif'],
      'koulen': ["Koulen", 'sans-serif'],
      'syne': ["Syne", 'sans-serif'],
      'poppins': ["Poppins", 'sans-serif'],
      'tajawal': ["Tajawal", 'sans-serif'],
    }
  },
  plugins: [],
}