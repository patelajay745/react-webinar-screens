/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      color: {
        blue: {
          200: "#8094ad",
          500: "#19406s",
          700: "#002b5b",
        },
        green: {
          400: "36c6c0",
        },
      },
    },
  },
  plugins: [],
};
