/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Add your client's brand colors here
      colors: {
        'brand-blue': '#0047AB',
        'brand-orange': '#FF8C00',
      },
      fontFamily: {
        // We'll use "Inter" as the primary font, loaded in index.html
        sans: ['Inter', 'sans-serif'],
      },
      // A utility class to add a subtle shadow to text on hero images
      textShadow: {
        'default': '0 2px 4px rgba(0, 0, 0, 0.5)',
      },
    },
  },
  plugins: [
    // Plugin to add the text-shadow utility
    function ({ addUtilities, theme }) {
      const newUtilities = {
        '.shadow-text': {
          textShadow: theme('textShadow.default'),
        },
      }
      addUtilities(newUtilities)
    }
  ],
}