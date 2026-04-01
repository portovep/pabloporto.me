import coreWebVitals from 'eslint-config-next/core-web-vitals';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import eslintConfigPrettier from 'eslint-config-prettier';

export default [
    {
        ignores: [
            '.next/**',
            '.claude/**',
            'node_modules/**',
            'public/**',
            'next-env.d.ts',
            '*.config.js',
            '*.config.mjs'
        ]
    },
    ...coreWebVitals,
    eslintConfigPrettier,
    {
        plugins: {
            '@typescript-eslint': tsPlugin
        },
        rules: {
            '@typescript-eslint/no-explicit-any': 'warn',
            '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }]
        }
    }
];
