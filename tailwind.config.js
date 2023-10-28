/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      colors: {
        seasalt: 'var(--seasalt)',
        'anti-flash-white': 'var(--anti-flash-white)',
        'french-gray': 'var(--french-gray)',
        'cadet-gray': 'var(--cadet-gray)',
        'slate-gray': 'var(--slate-gray)',
        'rich-black': 'var(--rich-black)',
        'gray-700': 'var(--charcoal)',
        gunmetal: 'var(--gunmetal)',
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
