'use client';

import { useTheme } from 'next-themes';
import { useEffect } from 'react';

/**
 * Ensures the theme class is applied to document.documentElement (html).
 * Fixes cases where next-themes does not apply the class (e.g. first paint, portal).
 */
export function ThemeSync(): null {
    const { resolvedTheme } = useTheme();

    useEffect(() => {
        if (typeof document === 'undefined' || !resolvedTheme) return;
        const root = document.documentElement;
        root.classList.remove('light', 'dark');
        if (resolvedTheme === 'dark' || resolvedTheme === 'light') {
            root.classList.add(resolvedTheme);
        }
        root.style.colorScheme = resolvedTheme === 'dark' ? 'dark' : 'light';
    }, [resolvedTheme]);

    return null;
}
