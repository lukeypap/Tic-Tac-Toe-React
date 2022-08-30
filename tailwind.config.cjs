/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,jsx,js,ts,tsx}"],
  theme: {
    fontFamily: {
      'body': "'Work Sans'",
    },
    extend: {
      shadow: {
        'boxshadow': "0px 5px 0px 0px"
      },
      colors: {
        'shadowColor': "#0F202A",
        "primary": "#192A32",
        "secondary": "#1F3540",
        "lightTile": "#A8BEC9",
      },
      fontFamily: {
        'logo': "'Oleo Script Swash Caps'"
      },
      animation: {
        fade: 'fadeIn 0.2s ease-in',
        fadeModal: 'fadeInModal 0.8s ease-in'
      },
      keyframes: theme => ({
        fadeIn: {
          '0%': { backgroundColor: theme('colors.transparent') },
          '100%': { backgroundColor: "rgba(0, 0, 0, 0.5)" },
        },
        fadeInModal: {
          '0%': { backgroundColor: "rgba(31, 53, 64, 0)" },
          '100%': { backgroundColor: theme('colors.secondary') },
        },
      }),
    },
  },
  plugins: [],
}
