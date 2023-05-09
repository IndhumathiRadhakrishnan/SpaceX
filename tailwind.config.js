/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: { max: '640px' }
      },
      keyframes: {
        floating: {
          '0%': {
            transform: 'translateY(0)',
          },
          '50%': {
            transform: 'translateY(-20px)',
          },
          '100%': {
            transform: 'translateY(0)',
          },
        },
        typing: {
          from: { width: '50%' },
          to: { width: '100%' },
        },
      },
      animation: {
        floating: 'floating 1s ease-in-out normal',
        typing: 'typing 1s steps(20, end) both',
      },
    },
  },

  plugins: [],
}
