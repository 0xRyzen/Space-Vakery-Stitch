/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                // Space Vakery Purple Palette
                charcoal: '#263973',
                midnight: '#263973',
                oat: '#FFFFC9',
                cream: '#FFFFC9',
                pistachio: '#5A69BF',
                matcha: '#5A69BF',
                blush: '#0FDBF2',
                apricot: '#0FDBF2',
                plum: '#AC43D9',
                // Derived colors
                primary: '#AC43D9', // Cosmic purple
                secondary: '#5A69BF', // Nebula blue-purple
                'text-dark': '#263973', // Deep space blue
                'text-light': '#FFFFC9', // Soft cosmic cream
                'background-light': '#FFFFC9', // Soft cosmic cream
                'background-dark': '#263973', // Deep space blue
                'card-light': '#FFFFC9',
                'card-dark': '#263973',
                'glass-white': 'rgba(255, 255, 255, 0.4)',
            },
            fontFamily: {
                display: ['"Cormorant Garamond"', 'serif'],
                serif: ['"Cormorant Garamond"', '"Playfair Display"', 'serif'],
                sans: ['Lato', 'Inter', 'sans-serif'],
            },
            borderRadius: {
                DEFAULT: '0.5rem',
                'pill': '50px',
                'xl': '1rem',
                '2xl': '1.5rem',
                '3xl': '2rem',
            },
            backgroundImage: {
                'cosmic-light': 'radial-gradient(circle at 50% 30%, rgba(255,255,255,0.8) 0%, rgba(245,242,234,0) 60%), radial-gradient(circle at 80% 20%, rgba(200, 220, 255, 0.2) 0%, rgba(245,242,234,0) 40%)',
                'cosmic-dark': 'radial-gradient(circle at 50% 30%, rgba(40,60,60,0.8) 0%, rgba(26,38,36,0) 60%), radial-gradient(circle at 80% 20%, rgba(100, 150, 140, 0.1) 0%, rgba(26,38,36,0) 40%)',
            },
            container: {
                center: true,
                padding: '1rem',
            },
        },
    },
    plugins: [],
}
