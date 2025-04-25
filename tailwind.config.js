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
        // Use CSS variable for primary, allowing opacity modifiers
        'primary': 'hsl(var(--color-primary) / <alpha-value>)',
        'text': '#333333',         // Dark Gray
        'subtle-text': '#777777',  // Medium Gray
        'background': '#F8F9FA',  // Off-white
        'white': '#FFFFFF',
        'logo-orange': '#ff4d00', // Add the new logo color
      },
      fontFamily: {
        // Add Source Code Pro, keeping existing mono fonts as fallbacks
        logo: ['"Source Code Pro"', ...defaultTheme.fontFamily.mono],
        // Keep default sans or define your primary body font
        sans: [...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'), // Add typography plugin for better prose styling
  ],
} 