/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '640px',
      // => @media (min-width: 640px) { ... }
      md: '768px',
      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }
    },
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        'lightblue-stroke': '#80AFF9',
        'grey-stroke': '#AEAEAE',
        'main-blue': '#1461DB',
        'grad-blue': '#268CEA',
        'btn-blue': '#266CDE',
        'light-blue':'#DAE4F9',
        'light-green':'#DAF9E6',
        'dark-green':'#478D55',
        'blue-gradient': '#508CEB',
        
      },
    },
  },
  plugins: [],
};
