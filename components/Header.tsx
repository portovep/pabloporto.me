'use client';

import { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import websiteLogo from '@/public/android-chrome-192x192.png';
import { cn } from '@/lib/utils';
// `sections` and `directLinks` drive the desktop "Explore" menu and the
// top-level right-hand links; `navLinks` is the full list for the mobile sheet.
import { navLinks, sections, directLinks } from '@/lib/navigation';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose, SheetTitle } from '@/components/ui/sheet';
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger
} from '@/components/ui/navigation-menu';

function isActiveRoute(pathname: string, href: string): boolean {
    return pathname === href || pathname.startsWith(`${href}/`);
}

export default function Header() {
    const [open, setOpen] = useState(false);
    const triggerRef = useRef<HTMLButtonElement>(null);
    const pathname = usePathname();

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
                <div className="flex items-center">
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
                </div>
                <NavigationMenu
                    viewport={false}
                    className="md:flex hidden"
                    data-testid="desktop-menu">
                    <NavigationMenuList className="gap-0">
                        <NavigationMenuItem className="static">
                            <NavigationMenuTrigger
                                className="nav-link mr-2 h-auto cursor-pointer rounded-md px-4 py-2 text-base font-semibold text-muted-foreground hover:bg-transparent hover:text-emerald-600 focus:bg-transparent data-[state=open]:bg-accent data-[state=open]:text-emerald-600"
                                data-testid="desktop-menu-trigger"
                                onPointerMove={(event) => event.preventDefault()}
                                onPointerLeave={(event) => event.preventDefault()}>
                                Explore
                            </NavigationMenuTrigger>
                            <NavigationMenuContent
                                className="left-auto right-0 z-50"
                                onPointerEnter={(event) => event.preventDefault()}
                                onPointerLeave={(event) => event.preventDefault()}>
                                <ul className="grid w-150 grid-cols-2 gap-2 p-3">
                                    {sections.map((link) => {
                                        const Icon = link.icon;
                                        const active = isActiveRoute(pathname, link.href);
                                        return (
                                            <li key={link.href}>
                                                <NavigationMenuLink asChild>
                                                    <Link
                                                        href={link.href}
                                                        data-testid={`desktop-menu-${link.testId}`}
                                                        className="h-full w-full flex-row items-start gap-3 rounded-md p-3">
                                                        <Icon
                                                            className={cn(
                                                                'mt-0.5 size-5 shrink-0',
                                                                active && 'text-emerald-600'
                                                            )}
                                                        />
                                                        <div className="flex flex-col gap-0.5">
                                                            <span
                                                                className={cn(
                                                                    'font-semibold text-foreground',
                                                                    active && 'text-emerald-600'
                                                                )}>
                                                                {link.label}
                                                            </span>
                                                            <span className="text-sm text-muted-foreground">
                                                                {link.description}
                                                            </span>
                                                        </div>
                                                    </Link>
                                                </NavigationMenuLink>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                        {directLinks.map((link) => {
                            const active = isActiveRoute(pathname, link.href);
                            return (
                                <NavigationMenuItem key={link.href}>
                                    <Link
                                        href={link.href}
                                        data-testid={`desktop-menu-${link.testId}`}
                                        className={cn(
                                            'nav-link text-base',
                                            active && 'text-emerald-600'
                                        )}>
                                        {link.label}
                                    </Link>
                                </NavigationMenuItem>
                            );
                        })}
                    </NavigationMenuList>
                </NavigationMenu>
                <div className="md:hidden flex items-center">
                    <Sheet open={open} onOpenChange={setOpen}>
                        <SheetTrigger asChild>
                            <Button
                                ref={triggerRef}
                                type="button"
                                variant="ghost"
                                size="icon"
                                className="ml-1 mr-1 h-8 w-8 text-foreground pointer-events-auto"
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
                            overlayClassName="top-[73px]"
                            onPointerDownOutside={(e) => {
                                if (
                                    e.target instanceof Node &&
                                    triggerRef.current?.contains(e.target)
                                ) {
                                    e.preventDefault();
                                }
                            }}>
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
