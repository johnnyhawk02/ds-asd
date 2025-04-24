/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#0a8b01',
        'text': '#db520d',
        'background': '#FFFFFF',
      },
    },
  },
  plugins: [],
} 