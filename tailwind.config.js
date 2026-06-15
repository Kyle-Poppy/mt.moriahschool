/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
  colors: {
    primary: {
      50: '#EEF2FF',
      100: '#DCE5FF',
      200: '#B8CBFF',
      300: '#8AA8FF',
      400: '#5A7DFF',
      500: '#1F2F8A',
      600: '#1A2875',
      700: '#15205F',
      800: '#10194A',
      900: '#0A1135',
    },

    gold: {
      50: '#FFFBEF',
      100: '#FFF3CC',
      200: '#FFE699',
      300: '#FFD966',
      400: '#E6B83C',
      500: '#D9A11B',
      600: '#BF8D17',
      700: '#A67913',
      800: '#7F5D0F',
      900: '#59410A',
    },

    brown: {
      50: '#F8F4F3',
      100: '#EDE1DE',
      200: '#D8C0B9',
      300: '#C09A8F',
      400: '#8C5A4F',
      500: '#4A2323',
      600: '#3D1D1D',
      700: '#321818',
      800: '#271313',
      900: '#1B0D0D',
    },

    accent: {
      500: '#D9A11B',
      600: '#BF8D17',
    },

    secondary: {
      300: '#FFE699',
      400: '#E6B83C',
      500: '#D9A11B',
      600: '#BF8D17',
    },
  },

  fontFamily: {
    heading: ['"Playfair Display"', 'Georgia', 'serif'],
    body: ['Inter', 'system-ui', 'sans-serif'],
  },
},
  },
  plugins: [],
};
