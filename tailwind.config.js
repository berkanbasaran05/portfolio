/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        bebas: ['"Bebas Neue"', 'cursive'],
        inter: ["Inter", "sans-serif"],
      },
      backgroundColor: {
        'progressbg': 'var(--red)',
      },
    },
  },
  plugins: [],
}
