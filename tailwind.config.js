const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
        './app/**/*.{js,ts,jsx,tsx}' // Enabled for App Router and shadcn/ui
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
