/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  daisyui: {
    themes: [
      {
        light:{
          
  ...require("daisyui/src/theming/themes")["[data-theme=cupcake]"],

  "primary": "#0048A4",    
  "secondary": "#F68C1F",      
  "accent": "#FF6F61",      
  "neutral": "#222831",          
  "base-100": "#F9FAFB",
  "base-200": "#E5E7EB", 
  "base-300": "#CBD5E1",    
  "info": "#18C2EC",    
  "success": "#0C5F37",  
  "warning": "#AD840B",
  "error": "#EF3C25"
  
        }
      },
      {
        dark: {  
  ...require("daisyui/src/theming/themes")["[data-theme=forest]"],
  "primary": "#0048A4",
  "secondary": "#F68C1F",
  "accent": "#FF6F61",
  "neutral": "#1A202C",
  "base-100": "#0D1117",
  "base-200": "#1C1F26",
  "base-300": "#2D3748",
  "info": "#18C2EC",
  "success": "#0C5F37",
  "warning": "#AD840B",
  "error": "#EF3C25"

        },
        
      },
    ],
  },
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
  },
  plugins: [require("@tailwindcss/typography"),require("daisyui")],
}