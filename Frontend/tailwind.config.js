/** @type {import('tailwindcss').Config} */
const withMT = require('@material-tailwind/react/utils/withMT');

module.exports = withMT({
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      main: '#0046ff',
      back: '#f7f7f7',
      sub: '#0067AC',
    },
    screens: {
      tb: { min: '768px', max: '1023px' },

      dt: { min: '1024px' },
    },
    extend: {
      fontFamily: {
        sans: ['NanumSquare', 'Arial', 'sans-serif'],
        main: ['NanumSquare'],
      },
    },
    keyframes: {
      shake: {
        '10%, 90%': { transform: 'translate3d(-1px, 0, 0)' },
        '20%, 80%': { transform: 'translate3d(2px, 0, 0)' },
        '30%, 50%, 70%': { transform: 'translate3d(-4px, 0, 0)' },
        '40%, 60%': { transform: 'translate3d(4px, 0, 0)' },
      },
    },
    animation: {
      shake: 'shake 0.5s cubic-bezier(.36,.07,.19,.97) both',
    },
  },
  plugins: [],
});
