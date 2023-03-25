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
        80: '68vh',
        110: '110vh'
      },
      fontFamily: {
      'my_font': ['"Open Sans"', "sans-serif"],
      'my_font_two': ['Rajdhani', "sans-serif"]
    }
    }
  },
  plugins: [],
}
