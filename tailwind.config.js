/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  screens: {
    sm: "375px",
    md: "960px",
    lg: "1440px",
  },
  theme: {
    extend: {},
  },
  plugins: [],
};
