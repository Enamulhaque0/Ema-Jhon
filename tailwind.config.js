/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#62f71d",
        
"secondary": "#5e70c9",
        
"accent": "#72e0da",
        
"neutral": "#191F24",
        
"base-100": "#FAF9FA",
        
"info": "#75CCEB",
        
"success": "#18B454",
        
"warning": "#D18615",
        
"error": "#E74065",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
