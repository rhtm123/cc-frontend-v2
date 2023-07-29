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
        cupcake:{
"primary": "#0171f9",
        
"secondary": "#F98901",
        
"accent": "#01EDF9",
        
"neutral": "#1a1d23",
          
"base-100": "#e8e4ec",
        
"info": "#18c2ec",
        
"success": "#0c5f37",
        
"warning": "#ad840b",
        
"error": "#ef3c25",
        }
      },
      {
        forest: {
        
"primary": "#0171f9",
        
"secondary": "#F98901",
        
"accent": "#01EDF9",
        
"neutral": "#191b24",
        
"base-100": "#14192c",
        
"info": "#18c2ec",
        
"success": "#0c5f37",
        
"warning": "#ad840b",
        
"error": "#ef3c25",
        },
        
      },
    ],
  },
  theme: {
    container: {
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