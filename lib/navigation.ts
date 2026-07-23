import {
    BookOpen,
    Briefcase,
    Clock,
    Hammer,
    Mic,
    PenLine,
    Plane,
    User,
    type LucideIcon
} from 'lucide-react';

export interface NavLink {
    href: string;
    label: string;
    testId: string;
    icon: LucideIcon;
    description: string;
}

// Content sections surfaced both as home-page cards and inside the header
// "Explore" menu. The descriptions here are the single source of truth for
// both surfaces — update them in one place.
export const sections: NavLink[] = [
    {
        href: '/blog',
        label: 'Writing',
        testId: 'writing',
        icon: PenLine,
        description: 'Articles and notes on software engineering and living a balanced life.'
    },
    {
        href: '/reading',
        label: 'Reading',
        testId: 'reading',
        icon: BookOpen,
        description: 'The books that shaped my thinking.'
    },
    {
        href: '/speaking',
        label: 'Speaking',
        testId: 'speaking',
        icon: Mic,
        description: 'Talks given at conferences, meetups and bootcamps.'
    },
    {
        href: '/working',
        label: 'Working',
        testId: 'working',
        icon: Briefcase,
        description: 'My experience building software and leading engineering teams.'
    },
    {
        href: '/traveling',
        label: 'Traveling',
        testId: 'traveling',
        icon: Plane,
        description: 'Some of my favourite travel memories and photos.'
    },
    {
        href: '/making',
        label: 'Making',
        testId: 'making',
        icon: Hammer,
        description: 'Some of the apps and things I made.'
    }
];

// Top-level links shown on the right of the header (no home-page card).
export const directLinks: NavLink[] = [
    { href: '/about', label: 'About', testId: 'about', icon: User, description: 'Who I am' },
    { href: '/now', label: 'Now', testId: 'now', icon: Clock, description: 'Current focus' }
];

// Full ordered list used by the mobile navigation sheet.
export const navLinks: NavLink[] = [...sections, ...directLinks];
