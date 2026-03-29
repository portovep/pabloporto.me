'use client';

import { Moon, Monitor, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';

const STORAGE_KEY = 'pabloporto-theme';

function getResolvedTheme(theme: 'light' | 'dark' | 'system'): 'light' | 'dark' {
    if (theme === 'system' && typeof window !== 'undefined') {
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return theme === 'dark' ? 'dark' : 'light';
}

function applyThemeToDocument(theme: 'light' | 'dark' | 'system'): void {
    if (typeof document === 'undefined') return;
    const resolved = getResolvedTheme(theme);
    const root = document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(resolved);
    root.style.colorScheme = resolved;
}

export function ThemeToggle(): React.ReactElement {
    const { setTheme } = useTheme();

    const handleSelect = (theme: 'light' | 'dark' | 'system') => () => {
        setTheme(theme);
        try {
            localStorage.setItem(STORAGE_KEY, theme);
        } catch {
            // ignore
        }
        applyThemeToDocument(theme);
    };

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    variant="outline"
                    size="icon"
                    className="h-8 w-8 cursor-pointer text-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    aria-label="Toggle theme"
                    data-testid="theme-toggle">
                    <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
                    <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
                    <span className="sr-only">Toggle theme</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuItem onSelect={handleSelect('light')}>
                    <Sun className="mr-2 h-4 w-4" />
                    Light
                </DropdownMenuItem>
                <DropdownMenuItem onSelect={handleSelect('dark')}>
                    <Moon className="mr-2 h-4 w-4" />
                    Dark
                </DropdownMenuItem>
                <DropdownMenuItem onSelect={handleSelect('system')}>
                    <Monitor className="mr-2 h-4 w-4" />
                    System
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
