/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      spacing:{
        '00': '550px',
      },
      fontFamily: {
        'karla': ['Inter'],
        'memeImgText' : ['Sans serif']
      },
    },
  },
  plugins: [],
}