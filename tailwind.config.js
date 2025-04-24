/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#375E97',
        'secondary': '#FB6542',
        'background': '#FFBB00',
      },
    },
  },
  plugins: [],
} 