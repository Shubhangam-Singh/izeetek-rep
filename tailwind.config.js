/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: '#1E3A5F',
          blue: '#1a5fa8',
          light: '#2d8cdc',
          accent: '#f5a623',
          'accent-dark': '#e09515',
        },
        neutral: {
          dark: '#222222',
          text: '#444444',
          light: '#f4f6f9',
        },
        footer: {
          DEFAULT: '#1a1a2e',
          deep: '#111122',
        },
      },
      fontFamily: {
        heading: ['Montserrat', 'sans-serif'],
        body: ['"Open Sans"', 'sans-serif'],
      },
      boxShadow: {
        nav: '0 2px 8px rgba(0, 0, 0, 0.1)',
        card: '0 8px 24px rgba(30, 58, 95, 0.12)',
      },
      maxWidth: {
        container: '1200px',
      },
      animation: {
        ticker: 'ticker 20s linear infinite',
        pulse: 'pulse 2s ease-out infinite',
      },
      keyframes: {
        ticker: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        pulse: {
          '0%': { boxShadow: '0 0 0 0 rgba(37, 211, 102, 0.7)' },
          '70%': { boxShadow: '0 0 0 18px rgba(37, 211, 102, 0)' },
          '100%': { boxShadow: '0 0 0 0 rgba(37, 211, 102, 0)' },
        },
      },
    },
  },
  plugins: [],
};
