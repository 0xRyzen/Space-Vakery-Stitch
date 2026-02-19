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
                // Dynamic theme colors using CSS variables
                charcoal: 'var(--color-charcoal)',
                midnight: 'var(--color-midnight)',
                oat: 'var(--color-oat)',
                cream: 'var(--color-cream)',
                pistachio: 'var(--color-pistachio)',
                matcha: 'var(--color-matcha)',
                blush: 'var(--color-blush)',
                apricot: 'var(--color-apricot)',
                plum: 'var(--color-plum)',
                // Derived colors
                primary: 'var(--color-primary)',
                secondary: 'var(--color-secondary)',
                'text-dark': 'var(--color-text-dark)',
                'text-light': 'var(--color-text-light)',
                'background-light': 'var(--color-background-light)',
                'background-dark': 'var(--color-background-dark)',
                'card-light': 'var(--color-background-light)',
                'card-dark': 'var(--color-background-dark)',
                'glass-white': 'var(--glass-white)',
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
