/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary": "#ff0000",
        "secondary": "#00ff00",
        "background": "#0000ff",
        "quaternary": "#ff00ff",
      },
    },
    
  },
  plugins: [],
}

