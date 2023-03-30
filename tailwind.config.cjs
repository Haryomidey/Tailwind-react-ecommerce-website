/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#F7F5EB',
        text_black: '#071C1F',
        secondary: {
          100: '#699403',
          200: '#80B500',
        },
      },
      width: {
        1000: '200vw',
        500: '100vw'
      },
      height: {
        70: '400px',
        80: '68vh',
        90: '80vh',
        110: '110vh',
        250: '250vh',
        
      },
      fontFamily: {
      open_sans: ['"Open Sans"', "sans-serif"],
      rajdhani: ['Rajdhani', "sans-serif"]
    }
    }
  },
  plugins: [],
}
