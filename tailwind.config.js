/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                charcoal: '#1C1F2A',
                midnight: '#222638',
                oat: '#F2E9DC',
                cream: '#FAF6F0',
                pistachio: '#A8C3A0',
                matcha: '#8BAF8C',
                blush: '#E7B7B2',
                apricot: '#E6A57E',
                plum: '#5E4B6E',
            },
            fontFamily: {
                serif: ['"Cormorant Garamond"', '"Playfair Display"', 'serif'],
                sans: ['Inter', 'sans-serif'],
            },
            container: {
                center: true,
                padding: '1rem',
            },
        },
    },
    plugins: [],
}
