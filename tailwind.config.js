/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'SoftRed': 'rgb(222, 61, 62)',
        'SoftBlue': 'rgb(67, 105, 203)',
        'SoftYellow': 'rgb(249, 206, 45)',
        'SoftOrange': 'rgb(232, 170, 83)',
        'SoftGreen': 'rgb(34, 162, 101)',
        'SoftGray': 'rgb(238, 239, 231)',
      }
    },
  },
  plugins: [],
}

