/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  darkMode: 'selector',
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
        darkGray: '#0c0c0d',
      },
      backgroundImage: {
        'darkBg': 'linear-gradient(to right, #000000, #434343)',
        'indigo': 'linear-gradient(to left, #4e54c8, #8f94fb)',
        'moon': 'linear-gradient(to right, #0f2027, #203a43, #2c5364)',
        'amon': 'linear-gradient(to left, #8e2de2, #4a00e0)',
        'midnight': 'linear-gradient(to left, #232526, #414345)',

      },
      boxShadow: {
        '2xl': '0 0px 10px -1px rgb(255 255 255 / 0.1), 0 8px 10px -6px rgb(255 255 255 / 0.1)',
        'orange': 'rgba(255, 147, 0, 0.4) -5px 5px, rgba(255, 147, 0, 0.3) -10px 10px, rgba(255, 147, 0, 0.2) -15px 15px, rgba(255, 147, 0, 0.1) -20px 20px, rgba(255, 147, 0, 0.05) -25px 25px',
        'indigo': 'rgba(134, 145, 248, 0.4) -5px 5px, rgba(134, 145, 248, 0.3) -10px 10px, rgba(134, 145, 248, 0.2) -15px 15px, rgba(134, 145, 248, 0.1) -20px 20px, rgba(134, 145, 248, 0.05) -25px 25px',
        'card': 'rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset',
      }
    },
  },
  plugins: [],
}
