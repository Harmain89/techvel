/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
const { Container } = require('postcss');

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    Container: {
      center: true,
      padding: '1rem',
      // screens: {
      //   sm: "100%",
      //   md: "100%",
      //   lg: "100%",
      //   xl: "100%",
      //   '2xl': "100%",
      // },
    },
  },
  plugins: [],
});
