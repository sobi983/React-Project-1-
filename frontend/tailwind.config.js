/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
          light: "#616161",
          dark: "#1e1e1e",
      }
    },
  },
  plugins: [],
}