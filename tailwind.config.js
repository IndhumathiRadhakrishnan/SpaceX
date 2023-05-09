/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
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
      },
      animation: {
        floating: 'floating 1s ease-in-out normal',
      },
      
    },
  },

  plugins: [],
}