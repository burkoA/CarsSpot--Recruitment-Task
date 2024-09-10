/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/*.html",
    "./public/js/*.js"
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto Flex', 'sans-serif'],
        bebas: ['Bebas Neue', 'sans-serif'],
        condensed: ['Roboto Condensed', 'sans-serif'],
      },
      width: {
        '7/10': '70%',
      },
    },
    screens: {
      'sm': {'min': '320px', 'max': '768px'},
      'md': {'min' : '768px', 'max': '992px'},
      'lg' : {'min' : '992px', 'max' : '1200px'},
      'xl' : {'min' : '1200px'},
      '2xl' : {'min' : '2000px'},
    },
  },
  plugins: [],
}
