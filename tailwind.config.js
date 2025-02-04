/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      colors: {
        "main-dark": "rgb(21, 32 ,43) ",
        "dark-gray": "rgb(156 ,163 ,175) ",
      },
      container: {
        center: true,
        margin: "0 auto",
       
      },
      screens:{
        'md': {'max': '767px'},
      }
    },
  },
  darkMode: "class",
  plugins: [],
};
