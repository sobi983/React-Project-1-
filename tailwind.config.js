/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      textUnderlineOffset: {
        16: '16px',
      }
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [ require('daisyui')],
  daisyui: {
    themes: ["cupcake", "forest"],
  },
}