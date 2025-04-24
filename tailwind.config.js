/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#B85042',
        'secondary': '#A7BEAE',
        'background': '#E7E8D1',
      },
    },
  },
  plugins: [],
} 