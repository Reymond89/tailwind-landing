/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        "principal":[ "Be Vietnam Pro", 'sans-serif']
      },
      colors:{
        "Bright-Red": "hsl(12, 88%, 59%)",
        "Dark-Blue": "hsl(228, 39%, 23%)",
        "Dark-Grayish-Blue": "hsl(227, 12%, 61%)",
        "Very-Dark-Blue": "hsl(233, 12%, 13%)",
        "Very-Pale-Red": "hsl(13, 100%, 96%)",
        "Very-Light-Gray": "hsl(0, 0%, 98%)",
        "orange-light":"#fef0ea"
      },
      fontSize: {
        '2xl': ['1.5rem', {
          lineHeight: '2rem',
          letterSpacing: '-0.01em',
          fontWeight: '500',
        }],
        '3xl': ['2.2rem', {
          lineHeight: '2.9rem',
          letterSpacing: '-0.02em',
          fontWeight: '700',
        }],
        '4xl': ['2.5rem', {
          lineHeight: '3.4rem',
          letterSpacing: '-0.02em',
          fontWeight: '500',
        }],
       
  },
  plugins: [],
    }}}

