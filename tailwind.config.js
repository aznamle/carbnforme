module.exports = {
  purge: {
    enabled: true,
    content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    // './components/slices/**/*.{js,ts,jsx,tsx}'
    ],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'montserrat': ['Montserrat']
    }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}