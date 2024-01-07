/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        para: ["Montserrat", "sans-serif"],
        heading: ["Playfair Display", "sans-serif"],
      },
    },
  },
  plugins: [],
};
