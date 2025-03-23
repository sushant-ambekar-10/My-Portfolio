/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        hammersmith: ['"Hammersmith One"', 'sans-serif'],
        pariet: ['"Parisienne"', 'cursive'], 
      },
    },
  },
  plugins: [],
}

