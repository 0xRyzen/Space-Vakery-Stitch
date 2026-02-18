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
                // Space Vakery Olive Grove Palette
                charcoal: '#354F42', // Deep forest green
                midnight: '#354F42', // Deep forest green
                oat: '#F1F7ED', // Soft honeydew
                cream: '#F1F7ED', // Soft honeydew
                pistachio: '#93C572', // Vibrant pistachio
                matcha: '#93C572', // Vibrant pistachio
                blush: '#C1D7AE', // Soft sage
                apricot: '#C1D7AE', // Soft sage
                plum: '#5E8C61', // Darker ivy green
                // Derived colors
                primary: '#93C572', // Pistachio
                secondary: '#5E8C61', // Ivy Green
                'text-dark': '#354F42', // Deep Forest
                'text-light': '#F1F7ED', // Honeydew
                'background-light': '#F1F7ED', // Honeydew
                'background-dark': '#354F42', // Deep Forest
                'card-light': '#F1F7ED',
                'card-dark': '#354F42',
                'glass-white': 'rgba(241, 247, 237, 0.4)',
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
                'cosmic-light': 'radial-gradient(circle at 50% 30%, rgba(241, 247, 237, 0.8) 0%, rgba(241, 247, 237, 0) 60%), radial-gradient(circle at 80% 20%, rgba(193, 215, 174, 0.3) 0%, rgba(241, 247, 237, 0) 40%)',
                'cosmic-dark': 'radial-gradient(circle at 50% 30%, rgba(53, 79, 66, 0.9) 0%, rgba(53, 79, 66, 0) 60%), radial-gradient(circle at 80% 20%, rgba(94, 140, 97, 0.2) 0%, rgba(53, 79, 66, 0) 40%)',
            },
            container: {
                center: true,
                padding: '1rem',
            },
        },
    },
    plugins: [],
}
