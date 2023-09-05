/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pinkk: '#F28AB2',
        t: '#333638'
      },
      fontFamily: {
        sans: ['Red Hat Display'],
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["autumn", "night"],
  },
}