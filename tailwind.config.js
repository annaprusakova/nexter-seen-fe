/** @type {import('tailwindcss').Config} */
module.exports = {
    mode: 'jit',
    important: true,
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './src/components/**/*.{js,ts,jsx,tsx}'
    ],
    darkMode: 'class',
    theme: {
        extend: {},
        screens: {
            sm: '380px',
            md: '768px',
            lg: '976px',
            xl: '1440px',
        },
        colors: {
            'main-color': '#ef233c',
            'main-dark': '#001A23',
            'main-white': '#edf2f4',
            'main-brown': '#2A2C25',
            'main-brown-light': '#CCC5B9',
            'red': '#DF5F5F',
            'transparent': 'transparent'
        },
        fontFamily: {
            sans: ['Roboto', 'sans-serif'],
        }
    },
    plugins: [require("rippleui")]
}

