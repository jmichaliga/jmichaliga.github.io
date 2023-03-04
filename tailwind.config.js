/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./pages/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        jmRed: "#FA1967",
        jmBlue: "#0AC",
      },
    },
  },
  plugins: [],
}
