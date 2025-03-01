/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {

      fontFamily: {
        primary: ["Poppins", "sans-serif"],
        secondary: ["Jister", "sans-serif"],
    },
  },
  plugins: [],
};

