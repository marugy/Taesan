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

    boxShadow: {
      'main': '0 35px 60px -15px rgba(0, 70, 255, 0.3)',
      'sub': '0 35px 60px -15px rgba(0, 70, 255, 0.3)',
      'test' : '0px 5px 15px rgba(0, 0, 0, 0.35)',
      'tests': '5px 20px 30px -10px rgb(38, 57, 77)',
      'test2' : 'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;',
      'custom': 'inset 3px 3px 6px 0px rgb(204, 219, 232), inset -3px -3px 6px 1px rgba(255, 255, 255, 0.5)',
      'custom2': '0px 2px 4px rgba(0, 0, 0, 0.4), 0px 7px 13px -3px rgba(0, 0, 0, 0.3), 0px -3px 0px inset rgba(0, 0, 0, 0.1)',
      'custom3': '-15px -15px 15px rgba(255, 255, 255, 0.2), 15px 15px 15px rgba(0, 0, 0, 0.1)',
      'custom4': 'rgb(38, 57, 77) 0px 20px 30px -10px',
      'custom5': 'rgb(38, 57, 77) 0px 20px 30px -10px,0px -3px 0px inset rgba(0, 0, 0, 0.1)',
      'custom6': '0px 19px 38px rgba(0, 0, 0, 0.3), 0px 15px 12px rgba(0, 0, 0, 0.22)',
      'final': 'rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px',
      'inset': 'rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset'
      
      

      
      
    },
  },
  plugins: [],
});
