/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'SoftRed': 'rgb(255,71,79,1)',
        'SoftBlue': 'rgb(83,48,210,1)',
        'SoftYellow': 'rgb(255,216,63,1)',
        'SoftOrange': 'rgb(232, 170, 83)',
        'SoftGreen': 'rgb(1,205,94,1)',
        'SoftGray': 'rgb(240,250,242,1)',
      }
    },
  },
  plugins: [],
}

