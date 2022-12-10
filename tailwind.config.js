// eslint-disable-next-line @typescript-eslint/no-var-requires
const colors = require('tailwindcss/colors');
const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
    content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    theme: {
        colors: {
            transparent: 'transparent',
            current: 'currentColor',
            black: colors.black,
            white: colors.white,
            gray: colors.gray,
            indigo: colors.indigo,
            lime: colors.lime,
            green: colors.green,
            emerald: colors.emerald,
            yellow: colors.yellow,
            red: colors.red
        },
        extend: {
            fontFamily: {
                sans: ['var(--font-inter)', fontFamily.sans]
            }
        }
    },
    plugins: [require('@tailwindcss/typography')]
};
