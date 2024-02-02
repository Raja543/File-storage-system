/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    screens: {
      md: "750px",
      lg: "1024px",
      xl: "1280px",
      sm: "640px",
    },
  },
  plugins: [],
};
