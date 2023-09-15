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
"primary": "#0048A4",    
"secondary": "#E35A01",      
"accent": "#E08955",      
"neutral": "#1a1d23",          
"base-100": "#e5ecf5",      
"info": "#18c2ec",    
"success": "#0c5f37",  
"warning": "#ad840b",
"error": "#ef3c25",
"--rounded-btn": "2rem",
        }
      },
      {
        forest: {    
"primary": "#0048A4",    
"secondary": "#E35A01",      
"accent": "#E08955",     
"neutral": "#191b24",       
"base-100": "#000e20",     
"info": "#18c2ec",    
"success": "#0c5f37",    
"warning": "#ad840b",      
"error": "#ef3c25",
"--rounded-btn": "2rem",
"--rounded-box": "2rem",
"--tab-radius": "2rem",
"--rounded-badge": "1.9rem",

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