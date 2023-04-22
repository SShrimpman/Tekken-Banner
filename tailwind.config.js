/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        '1160': '1160px',
        '150': '150px',
      },
      height: {
        'sixty': '60px'
      },
      borderWidth: {
        '3': '3px'
      },
      borderRadius: {
        '45': '45px'
      }
    },
  },
  plugins: [],
}

