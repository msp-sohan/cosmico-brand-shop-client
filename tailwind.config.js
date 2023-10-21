/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    fontFamily: {
      sans: ['Playfair Display', 'sans-serif'],
      serif: ['Roboto', 'serif'],
    },
    extend: {},
  },
  plugins: [require("daisyui")],
}