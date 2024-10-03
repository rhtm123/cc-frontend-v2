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
    extend: {
      typography: {
        DEFAULT: {
          css: {
            h1: {
              marginTop: '0.5rem',  // Adjust as needed to half the default margin
              marginBottom: '0.5rem', // Adjust as needed to half the default margin
            },
            h2: {
              marginTop: '0.5rem',  // Adjust as needed to half the default margin
              marginBottom: '0.5rem', // Adjust as needed to half the default margin
            },
            h3: {
              marginTop: '0.5rem',  // Adjust as needed to half the default margin
              marginBottom: '0.5rem', // Adjust as needed to half the default margin
            },
            h4: {
              marginTop: '0.5rem',  // Adjust as needed to half the default margin
              marginBottom: '0.5rem', // Adjust as needed to half the default margin
            },
            h5: {
              marginTop: '0.5rem',  // Adjust as needed to half the default margin
              marginBottom: '0.5rem', // Adjust as needed to half the default margin
            },
            h6: {
              marginTop: '0.5rem',  // Adjust as needed to half the default margin
              marginBottom: '0.5rem', // Adjust as needed to half the default margin
            },
            p: {
              marginTop: '0.5rem',  // Adjust as needed to half the default margin
              marginBottom: '0.5rem', // Adjust as needed to half the default margin
            },
            li: {
              marginTop: '0.05rem',  // Adjust as needed to half the default margin
              marginBottom: '0.05rem', // Adjust as needed to half the default margin
            },
            pre: {
              marginTop: '0.1rem', // Adjust as needed to half the
              marginBottom: '0.1rem', // Adjust as needed to half the
            }
          },
        },
      },
    },
  },
  
  plugins: [require("@tailwindcss/typography"),require("daisyui")],
}