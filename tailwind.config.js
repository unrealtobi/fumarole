/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}",
  "./rusty.html",
  "./about.html",
  "./projects.html",
  "./node_modules/tw-elements/js/*.js"
],
  theme: {
    extend: {
      keyframes:{
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },

      }
     },
     animation:{
      'fade-in': 'fade-in 1.5s ease-in-out',
      'fade-inner': 'fade-in 3.0s ease-in-out'
     },
     
  },
  plugins: [
    require("tw-elements/plugin.cjs")
  ],
  darkMode: "class",
}
};

