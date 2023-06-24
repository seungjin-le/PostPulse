/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,tsx,ts}'],
  theme: {
    screens: {
      sm: {max: '800px'},
      md: {max: '1200px'},
      lg: {max: '1600px'},
    },
    extend: {},
    colors: {},
    backgroundColor: {
      pageBg: 'rgba(22,22,22)',
    },
    backgroundImage: {
      header: 'linear-gradient(0deg, hsla(0, 0%, 10%, 0), #161616)',
    },
  },
  plugins: [],
}
