const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
        // './app/**/*.{js,ts,jsx,tsx}', // Uncomment if using the app directory
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['var(--font-inter)', ...fontFamily.sans]
            }
        }
    },
    plugins: [require('@tailwindcss/typography')]
};
