/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1a1781",
      },
      fontFamily: {
        saira: ["Saira, sans-serif"],
      },
    },
  },
  plugins: [],
};
