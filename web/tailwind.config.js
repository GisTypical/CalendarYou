module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Karla', 'sans-serif', 'Roboto'],
        'heading': ['Josefin Sans']
      },
      colors: {
        background: '#0E141B',
        gunmetal: '#1D2733',
        charcoal: '#222D3B',
        accent: '#FFD500',
        secondary: '#362EC3',
        ternary: '#2976B0'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
