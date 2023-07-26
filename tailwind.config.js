/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        handjet: ['Handjet', 'cursive'],
        tektur: ['Tektur', 'cursive'],
        karla: ['Karla', 'sans-serif']
      },
    },
  },
}