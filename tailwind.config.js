/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        b:"#7a500d",
        bb:"#915b4a",
        bbb:"#d59b6c",
        dp: "#f471b5ff"
      }
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["autumn", "night"],
  },
}