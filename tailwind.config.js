/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ 
    './src/*.{js,jsx,ts,tsx}',
    './src/**/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-background': '#18202b',
      },
    },
  },
  plugins: [],
}
