/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryWhite: "#ffffff",
        lightGray: "#d6e2f0",
        grayishBlue: "#7b879d",
        darkBlue: "#1f3251",
      },
    },
  },
  plugins: [],
};
