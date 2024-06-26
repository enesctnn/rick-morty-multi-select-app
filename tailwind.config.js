/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        custom: {
          50: '#e2e8f0',
          100: '#adb8c8',
          200: '#94a3b8',
          300: '#475569',
          400: '#374559',
          500: '#3b495c',
        },
      },
      fontFamily: {
        roboto: ['"Roboto"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
