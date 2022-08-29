/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,jsx,js,ts,tsx}"],
  theme: {
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
    },
  },
  plugins: [],
}
