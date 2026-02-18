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
                // Space Vakery Pastel Dream Palette
                charcoal: '#4A4063', // Deep dusky violet
                midnight: '#4A4063', // Deep dusky violet
                oat: '#FFF0F5', // Lavender blush
                cream: '#FFF0F5', // Lavender blush
                pistachio: '#B5EAD7', // Pastel mint
                matcha: '#B5EAD7', // Pastel mint
                blush: '#FFDAC1', // Pastel peach
                apricot: '#FFDAC1', // Pastel peach
                plum: '#C7CEEA', // Pastel periwinkle
                // Derived colors
                primary: '#957DAD', // Muted Purple
                secondary: '#FEC8D8', // Soft Pink
                'text-dark': '#4A4063', // Dusky Violet
                'text-light': '#FFF0F5', // Lavender Blush
                'background-light': '#FFF0F5', // Lavender Blush
                'background-dark': '#4A4063', // Dusky Violet
                'card-light': '#FFF0F5',
                'card-dark': '#4A4063',
                'glass-white': 'rgba(255, 240, 245, 0.4)',
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
                'cosmic-light': 'radial-gradient(circle at 50% 30%, rgba(255, 240, 245, 0.8) 0%, rgba(255, 240, 245, 0) 60%), radial-gradient(circle at 80% 20%, rgba(255, 218, 193, 0.3) 0%, rgba(255, 240, 245, 0) 40%)',
                'cosmic-dark': 'radial-gradient(circle at 50% 30%, rgba(74, 64, 99, 0.9) 0%, rgba(74, 64, 99, 0) 60%), radial-gradient(circle at 80% 20%, rgba(149, 125, 173, 0.2) 0%, rgba(74, 64, 99, 0) 40%)',
            },
            container: {
                center: true,
                padding: '1rem',
            },
        },
    },
    plugins: [],
}
