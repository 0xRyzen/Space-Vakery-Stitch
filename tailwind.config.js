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
                // Space Vakery Midnight Blue & Silver Palette
                charcoal: '#000511', // Very dark blue/black
                midnight: '#000511', // Very dark blue/black
                oat: '#E8EAF6', // Cool silver/white
                cream: '#E8EAF6', // Cool silver/white
                pistachio: '#5C6BC0', // Soft indigo
                matcha: '#5C6BC0', // Soft indigo
                blush: '#9FA8DA', // Light indigo
                apricot: '#9FA8DA', // Light indigo
                plum: '#3949AB', // Rich blue
                // Derived colors
                primary: '#3949AB', // Rich Blue
                secondary: '#5C6BC0', // Indigo
                'text-dark': '#000511', // Midnight
                'text-light': '#E8EAF6', // Silver
                'background-light': '#E8EAF6', // Silver
                'background-dark': '#000511', // Midnight
                'card-light': '#E8EAF6',
                'card-dark': '#000511',
                'glass-white': 'rgba(232, 234, 246, 0.4)',
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
                'cosmic-light': 'radial-gradient(circle at 50% 30%, rgba(232, 234, 246, 0.8) 0%, rgba(232, 234, 246, 0) 60%), radial-gradient(circle at 80% 20%, rgba(159, 168, 218, 0.2) 0%, rgba(232, 234, 246, 0) 40%)',
                'cosmic-dark': 'radial-gradient(circle at 50% 30%, rgba(0, 5, 17, 0.9) 0%, rgba(0, 5, 17, 0) 60%), radial-gradient(circle at 80% 20%, rgba(57, 73, 171, 0.2) 0%, rgba(0, 5, 17, 0) 40%)',
            },
            container: {
                center: true,
                padding: '1rem',
            },
        },
    },
    plugins: [],
}
