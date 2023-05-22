/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Overpass', ...defaultTheme.fontFamily.sans],
        pangolin:['Pangolin']
      },
    },
    colors: {
      orange: "hsl(25, 97%, 53%)",
      white: "hsl(0, 0%, 100%)",
      lightGrey: "hsl(217, 12%, 63%)",
      mediumGrey: "hsl(216, 12%, 54%)",
      darkBlue: "hsl(213, 19%, 18%)",
      veryDarkBlue: "hsl(216, 12%, 8%)",
    },
    
  },
  plugins: [],
};
