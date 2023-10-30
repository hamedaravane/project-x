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
        'dark-transparent': 'var(--dark-transparent)',
        'default-txt': 'var(--text-color)',
        'heading-txt': 'var(--heading-color)',
        'disabled-txt': 'var(--disabled-color)',
        'body-background': 'var(--body-background)',
        component: 'var(--component-background)',
        'disabled-background': 'var(--disabled-background)',
        'disabled-br': 'var(--disabled-border-color)',
        'base-br': 'var(--border-color-base)',
        'header-background': 'var(--header-background)',
      },
      lineHeight: {
        unset: 'unset',
      },
    },
  },
  plugins: [],
};
