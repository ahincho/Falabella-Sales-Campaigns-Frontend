/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#04662E',
        'secondary': '#C1D005',
        'tertiary': '#EABFB5',
        'gray': '#D9D9D9',
      }
    },
  },
  plugins: [],
}

