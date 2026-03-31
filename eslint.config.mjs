import path from 'node:path';
import { fileURLToPath } from 'node:url';
import js from '@eslint/js';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default [
    {
        ignores: ['.next/**', '.claude/**', 'node_modules/**', 'public/**', 'next-env.d.ts', '*.config.js', '*.config.mjs']
    },
    ...compat.extends(
        'next/core-web-vitals',
        'plugin:@typescript-eslint/recommended',
        'prettier'
    ),
    {
        rules: {
            '@typescript-eslint/no-explicit-any': 'warn',
            '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }]
        }
    }
];
