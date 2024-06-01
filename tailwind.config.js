/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
    theme: {
     extend: {},
      fontFamily: {
     poppins: ["poppins","Sans-serif"],
     Pompiere:["Pompiere"],
     cursive: ["Cedarville Cursive", "cursive"],
     roboto: ['Roboto', 'sans-serif'],
    },
    transitionDuration: {
        '2000': '2000ms',
      },
    width: {
        70: '70%',
      }
  },
  plugins: [],
}
