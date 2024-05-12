/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        custom: {
          50: '#e2e8f0',
          100: '#94a3b8',
          200: '#adb8c8',
          300: '#475569',
          400: '#374559',
        },
      },
      fontFamily: {
        roboto: ['"Roboto"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
