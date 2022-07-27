/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      nunito: ["Nunito", "sans-serif"],
    },
    extend: {
      colors: {
        "brand-gray-dark": "#ACAFC9",
        "brand-dark": "#282D55",
        "brand-gray": "#E3E3E3",
        "brand-blue": "#3D64E3",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1180px",
    },
  },
  plugins: [],
};
