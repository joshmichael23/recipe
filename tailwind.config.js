/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        youngserif: ['"Young Serif"'],
        outfit: ['"Outfit"'],
      },
      colors: {
        clwhite: "hsl(0, 0%, 100%)",
        clroseWhite: 'hsl(330, 100%, 98%)',
        cleggshell: 'hsl(30, 54%, 90%)',
        cllightGrey: 'hsl(30, 18%, 87%)',
        clwengeBrown: 'hsl(30,10%,34%)',
        cldarkCharcoal: 'hsl(24, 5%, 18%)',
        clNutmeg: 'hsl(14, 45%, 36%)',
        clDarkRaspberry: 'hsl(332, 51%, 32%)',
        clDarkRaspberry2: 'hsl(215, 240%, 236%)',
      }
    },
  },
  plugins: [],
}