/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#4A90E2',      // Calm Blue
        'text': '#333333',         // Dark Gray
        'subtle-text': '#777777',  // Medium Gray
        'background': '#F8F9FA',  // Off-white
        'white': '#FFFFFF',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'), // Add typography plugin for better prose styling
  ],
} 