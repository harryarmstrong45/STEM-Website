/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      "primary": "#147fcb",
      "secondary": "#d0e5f5",
      "white": "#FFFFFF"
    },
    extend: {
      fontFamily: {
        'Montserrat': ['"Montserrat"', 'cursive'],
      },
    },
  },
  plugins: [],
}
