/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary": "#e43397",
        "secondary": "#5ce1e6",
        "background": "#ffffff",
        "quaternary": "#ff00ff",
      },
    },
    
  },
  plugins: [],
}

