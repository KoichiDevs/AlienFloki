/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'orbit': ['Orbitron'],
        'gruppo': ['Gruppo']
      },
      colors: {
        'mygrey': '#cdcdcd',
        'heroblue': '#739FA0'
      },
      backgroundImage: {
        token: "url('/tokenomics.webp')",
        footer: "url('/footer.webp')"
      }
    },
  },
  plugins: [],
}
