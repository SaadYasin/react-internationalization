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
      colors: {
        darkBg: {
          DEFAULT: "#06252b",
        },
        primary: {
          DEFAULT: "#013d5a",
          hover: "#343e4a",
        },
        secondary: "#4d5053",
        accent: {
          DEFAULT: "#cda274",
          secondary: "#f4f0ec",
          hover: "#b88c5d",
        },
      },
    },
  },
  plugins: [],
};

