module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      maxHeight: {
        '398': '398px',
      },
      minHeight: {
        '398': '398px',
      },
      minWidth: {
        '80': '320px',
        '300': '300px',
      },
    },
  },
  plugins: [require('flowbite/plugin')],
};
