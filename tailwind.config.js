/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      colors: {
        'neutral-600': {
          transparent: {
            10: 'rgba(82, 82, 82, 0.1)',
            30: 'rgba(82, 82, 82, 0.3)',
            50: 'rgba(82, 82, 82, 0.5)',
            70: 'rgba(82, 82, 82, 0.7)',
            90: 'rgba(82, 82, 82, 0.9)',
          },
        },
      },
      lineHeight: {
        unset: 'unset',
      },
    },
  },
  plugins: [],
};
