/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: {
          200: "#7f96ac",
          500: "#193F6B",
          700: "#002a5a",
        },
        green: {
          400: "#40e1d0",
        },
      },
    },
  },
  plugins: [],
};
