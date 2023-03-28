/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      "primary": "#147fcb",
      "secondary": "#d0e5f5",
      "white": "#FFFFFF",
      "NormalLink": "#0026a7",
      "HoveredLink": "#0039fc",
    },
    extend: {
      fontFamily: {
        'Montserrat': ['"Montserrat"', 'cursive'],
      },
    },
  },
  plugins: [],
}
