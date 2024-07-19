/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      padding: {
        DEFAULT: "1.5rem",
      },
    },
    fontFamily: {
      primary: ["Poppins", "sans-serif"],
      secondary: ["Jost", "sans-serif"],
    },
    extend: {
      
    },
  },
  plugins: [],
};

