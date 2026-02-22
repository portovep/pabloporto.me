'use client';

import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { ThemeSync } from '@/components/ThemeSync';

interface ThemeProviderProps {
    children: React.ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
    return (
        <NextThemesProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            storageKey="pabloporto-theme"
            enableColorScheme>
            <ThemeSync />
            {children}
        </NextThemesProvider>
    );
}
