// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
    // tell Tailwind where to look for class names
    content: [
      './src/**/*.{js,jsx,ts,tsx}',
      './app/**/*.{js,jsx,ts,tsx}',
      './components/**/*.{js,jsx,ts,tsx}',
      './pages/**/*.{js,jsx,ts,tsx}',
    ],
    theme: {
        // tailwind.config.js (inside theme.extend)
        extend: {
            keyframes: {
            marquee: {
                '0%': { transform: 'translateX(0%)' },
                '100%': { transform: 'translateX(-50%)' },
            },
            },
            animation: {
            'marquee-ltr': 'marquee 18s linear infinite',
            },
        },
        
    },
    plugins: [],
  };
  