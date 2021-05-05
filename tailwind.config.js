// eslint-disable-next-line @typescript-eslint/no-var-requires
const colors = require('tailwindcss/colors');

module.exports = {
    purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        colors: {
            transparent: 'transparent',
            current: 'currentColor',
            black: colors.black,
            white: colors.white,
            gray: colors.coolGray,
            indigo: colors.indigo,
            lime: colors.lime,
            green: colors.green,
            emerald: colors.emerald,
            red: colors.red
        },
        extend: {
            typography: (theme) => ({
                DEFAULT: {
                    css: {
                        color: '#333',
                        a: {
                            color: theme('colors.emerald.500'),
                            '&:hover': {
                                color: theme('colors.emerald.600'),
                                fontWeight: '500'
                            },
                            textDecoration: 'none'
                        }
                    }
                }
            })
        }
    },
    variants: {
        extend: {}
    },
    plugins: [require('@tailwindcss/typography')]
};
