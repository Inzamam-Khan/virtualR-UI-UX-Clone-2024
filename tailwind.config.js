/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        palanquin:['Palanquin','sans-serif'],
        montserrat:['Monteserrat','sans-serif']
      },
      boxShadow:{
          '3xl': '0px  10px 40px rgba(205,209, 228, 1)'
          // (205, 209, 228);, 1
      },
      colors:{
        "slate-gray":"#6D6D6D",
      },
      backgroundImage:{
        "ai-logo":"url('/src/assets/bg/ai_bg.jpg')",
      }
    },
  },
  plugins: [],
}