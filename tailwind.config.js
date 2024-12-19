/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#145659',
          light: '#1a6b6f',
          dark: '#0e4144',
        }
      },
      fontFamily: {
        handwriting: ['Segoe Print', 'Bradley Hand', 'Chilanka', 'TSCu_Comic', 'casual', 'cursive']
      }
    },
  },
  plugins: [],
}