/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        popins: ['Inter']
      },
      screens: {
        sm: '375px',
        md: '547px',
        lg: '768px',
        xl: '1024px',
        '2xl': '1680px',
      },
      spacing:{
        '0': '450px',
        '00': '600px',
      },
      colors: {
        'navbar-color': '#F55A5A'
      },
    },
  },
  plugins: [],
}