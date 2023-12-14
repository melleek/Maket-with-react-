/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '400px',
      'lg': '1024px',
    },
    extend: {},
  },
  plugins: [],
}