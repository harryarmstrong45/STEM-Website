/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      "primary": "#2596be"
    },
    extend: {
      fontFamily: {
        'Montserrat': ['"Montserrat"', 'cursive'],
      },
    },
  },
  plugins: [],
}
