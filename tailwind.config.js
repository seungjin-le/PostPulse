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
    colors: {
      texts: '#eee',
      description: '#9b9b9b',
      card: '#252525',
    },
    backgroundColor: {
      pageBg: 'rgba(22,22,22, 0.9)',
      item: '#252525',
      texts: '#eee',
    },
    backgroundImage: {
      header: 'linear-gradient(0deg, hsla(0, 0%, 10%, 0),#161616)',
    },
    boxShadow: {
      cursor: '0 0 30px 15px rgba(255, 255, 255, 0.7)',
      tagBoxLeft: 'inset 60px 0 10px -10px rgba(255, 255, 255, .4);',
      tagBoxRight: 'inset -60px 0 10px -10px rgba(255, 255, 255, .4);',
      tagBoxXAll:
        'inset 60px 0 10px -10px rgba(255, 255, 255, .4),inset -60px 0 10px -10px rgba(255, 255, 255, .4);',
    },
    borderRadius: {
      container: '4px',
      item: '14px',
      full: '9999px',
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
}
