// Tailwind CSS for React Native configuration.

const colors = require('./constants/colors');
const fonts = require('./constants/fonts');

/** @type {import('tailwindcss').Config} */
module.exports = {
  // paths to all of our component files.
  content: ['./app/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors,
      fontFamily: fonts,
    },
  },
  plugins: [],
};
