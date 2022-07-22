/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens:{
      '1420px-custom':{
        'max':'1420px'
      },
      '1032px-custom':{
        'max':'1032px'
      },
      '500px-custom':{
        'max':'500px'
      }
    }
  },
  plugins: [],
}
