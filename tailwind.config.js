/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        lightBlue: '#89dddd',
        customYellow:"#f2cd30ff"
      }
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["synthwave", "valentine"],
  },
}