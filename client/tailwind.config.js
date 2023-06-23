/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary': '#00686c',
        'secondary': '#00686D',
        'blue-dark': '#232C64',
        'grey-dark': '#3a3c4b',
        'grey-dark-2': '#3D3F4D',
        'grey-lighter': '#eeeeee',
        'grey-lighter-2': '#f8fafc',
        'grey-main': '#e5e4f0',
      },
     
    },
  },
  plugins: [],
};
