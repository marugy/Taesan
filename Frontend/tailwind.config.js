/** @type {import('tailwindcss').Config} */
const withMT = require('@material-tailwind/react/utils/withMT');

module.exports = withMT({
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      tb: { min: '768px', max: '1023px' },

      dt: { min: '1024px' },
    },
    extend: {},
  },
  plugins: [],
});
