/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mainColor: '#2D3958',
        mainColor2: '#6E7CA0',
        mainColor3: '#1D3A94',
        mainColor4: '#3952A1',
        mainColor5: '#727576',
        white: '#FFFFFF',
        background: '#F9FAFB'
      },
    },
  },
  plugins: [],
}