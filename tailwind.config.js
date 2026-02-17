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
                // Original colors
                charcoal: '#1C1F2A',
                midnight: '#222638',
                oat: '#F2E9DC',
                cream: '#FAF6F0',
                pistachio: '#A8C3A0',
                matcha: '#8BAF8C',
                blush: '#E7B7B2',
                apricot: '#E6A57E',
                plum: '#5E4B6E',
                // Space Vakery colors
                primary: '#9CB29D', // Sage/Pistachio Green
                secondary: '#ECD8CE', // Soft Blush/Peach
                'text-dark': '#3A4A40', // Dark Greenish Charcoal
                'text-light': '#F5F2EA', // Light text for dark mode
                'background-light': '#F5F2EA', // Oat/Cream
                'background-dark': '#1A2624', // Deep cosmic dark teal
                'card-light': '#FAF8F4',
                'card-dark': '#2A3634',
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
