'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import websiteLogo from '@/public/android-chrome-192x192.png';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose, SheetTitle } from '@/components/ui/sheet';

const navLinks = [
    { href: '/blog', label: 'Writing', testId: 'writing' },
    { href: '/reading', label: 'Reading', testId: 'reading' },
    { href: '/speaking', label: 'Speaking', testId: 'speaking' },
    { href: '/working', label: 'Working', testId: 'working' },
    { href: '/traveling', label: 'Traveling', testId: 'traveling' },
    { href: '/making', label: 'Making', testId: 'making' },
    { href: '/about', label: 'About', testId: 'about' },
    { href: '/now', label: 'Now', testId: 'now' }
];

export default function Header() {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const mq = window.matchMedia('(min-width: 768px)');
        const close = (e: MediaQueryListEvent) => {
            if (e.matches) setOpen(false);
        };
        mq.addEventListener('change', close);
        return () => mq.removeEventListener('change', close);
    }, []);

    return (
        <header
            data-testid="navbar"
            className="sticky top-0 z-20 py-5 border-b border-border bg-background text-foreground">
            <div className="lg:max-w-4xl md:px-0 container flex items-center justify-between px-6 mx-auto">
                <Link
                    href="/"
                    className="rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                    <div className="flex justify-start mr-2">
                        <div className="sm:h-10 sm:w-10 relative w-8 h-8">
                            <Image priority alt="Website logo" src={websiteLogo} />
                        </div>
                    </div>
                </Link>
                <Link
                    href="/"
                    className="rounded-sm font-bold tracking-wider text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                    Pablo Porto
                </Link>
                <nav
                    className="md:flex md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-border flex-wrap items-center justify-center hidden text-base"
                    data-testid="desktop-menu">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="nav-link"
                            data-testid={`desktop-menu-${link.testId}`}>
                            {link.label}
                        </Link>
                    ))}
                </nav>
                <div className="md:hidden flex items-center">
                    <Sheet open={open} onOpenChange={setOpen}>
                        <SheetTrigger asChild>
                            <Button
                                type="button"
                                variant="ghost"
                                size="icon"
                                className="ml-1 mr-1 h-8 w-8 text-foreground"
                                aria-label={open ? 'Close menu' : 'Open menu'}
                                aria-expanded={open}
                                data-testid="mobile-menu-toggle">
                                {open ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        aria-hidden="true">
                                        <path
                                            fillRule="evenodd"
                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        aria-hidden="true">
                                        <path
                                            fillRule="evenodd"
                                            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                )}
                            </Button>
                        </SheetTrigger>
                        <SheetContent
                            side="right"
                            className="bg-background w-72 top-[73px] bottom-0 h-auto pt-8"
                            aria-describedby={undefined}
                            showCloseButton={false}
                            overlayClassName="top-[73px]">
                            <SheetTitle className="sr-only">Navigation</SheetTitle>
                            <nav data-testid="mobile-menu">
                                {navLinks.map((link) => (
                                    <SheetClose asChild key={link.href}>
                                        <Link
                                            href={link.href}
                                            className="nav-link flex items-center w-full px-8 py-4 dark:text-primary"
                                            data-testid={`mobile-menu-${link.testId}`}>
                                            {link.label}
                                        </Link>
                                    </SheetClose>
                                ))}
                            </nav>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    );
}
