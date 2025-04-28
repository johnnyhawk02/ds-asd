import defaultTheme from 'tailwindcss/defaultTheme'; // Import default theme

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': 'hsl(var(--color-primary) / <alpha-value>)',
        'text': '#2D3748',         // Slightly softer black
        'subtle-text': '#718096',  // Lighter gray for secondary text
        'background': '#F7FAFC',   // Lighter background
        'white': '#FFFFFF',
      },
      fontFamily: {
        logo: ['"Source Code Pro"', ...defaultTheme.fontFamily.mono],
        sans: ['"Inter"', ...defaultTheme.fontFamily.sans],
      },
      spacing: {
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
} 