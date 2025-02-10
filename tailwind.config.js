/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#1959AC',
        secondary: '#0546D2',
        text: '#222222',
      },
      fontSize: {
        'heading': ['42px', {
          lineHeight: '1.2',
          letterSpacing: '-0.02em',
          fontWeight: '700',
        }],
        'subheading': ['24px', {
          lineHeight: '1.4',
          letterSpacing: '-0.02em',
          fontWeight: '600',
        }],
        'subheading-sm': ['20px', {
          lineHeight: '1.4',
          letterSpacing: '-0.02em',
          fontWeight: '600',
        }],
      },
    },
  },
  plugins: [],
};