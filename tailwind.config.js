/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      colors: {
        gray: {
          50: 'var(--gray-50)',
          100: 'var(--gray-100)',
          200: 'var(--gray-200)',
          300: 'var(--gray-300)',
          400: 'var(--gray-400)',
          500: 'var(--gray-500)',
          700: 'var(--gray-700)',
          800: 'var(--gray-800)',
          900: 'var(--gray-900)',
          950: 'var(--gray-950)',
        },
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
