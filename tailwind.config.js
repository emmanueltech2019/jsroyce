/** @type {import('tailwindcss').Config} */
module.exports = {
  mode:"jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        bgGray:" #F9F9F9;",
        lightGray:"#696767;",
        darkBlack:"#323030;",
        navDarkGold:" #191818;",
        darkestGold:"#262424;",
        mainGold:"#E9B806",
        bgBase:"#102235",
        mainSilver:"#ebebeb",
        step1:"#cd9a08",
        step2:"#ebbd07",
        step3:"#f7cc0a",
        step4:"#cd9a08"
      }
    },
  },
  plugins: [],
}