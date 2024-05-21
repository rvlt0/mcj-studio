/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['"Inter"', ...defaultTheme.fontFamily.sans],
        newsreader: ['"Newsreader"', ...defaultTheme.fontFamily.serif],
        roboto: ['"Roboto"', ...defaultTheme.fontFamily.sans]
      },
      colors: {
        gray: '#403737',
      }
    },
  },
  plugins: [],
}
