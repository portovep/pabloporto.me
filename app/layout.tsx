import '../styles/globals.css';
import { Inter } from 'next/font/google';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { ThemeProvider } from '@/components/ThemeProvider';
import { Analytics } from '@vercel/analytics/react';
import type { Metadata } from 'next';

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter'
});

const siteUrl = 'https://pabloporto.me';

export const metadata: Metadata = {
    title: {
        default: 'Pablo Porto',
        template: '%s | Pablo Porto'
    },
    description: 'Personal website of Pablo Porto',
    metadataBase: new URL(siteUrl),
    authors: [{ name: 'Pablo Porto' }],
    creator: 'Pablo Porto',
    publisher: 'Pablo Porto',
    formatDetection: {
        email: false,
        address: false,
        telephone: false
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1
        }
    },
    openGraph: {
        siteName: 'Pablo Porto',
        locale: 'en_US',
        type: 'website',
        title: 'Pablo Porto',
        description: 'Personal website of Pablo Porto',
        url: '/'
    },
    twitter: {
        card: 'summary',
        title: 'Pablo Porto',
        description: 'Personal website of Pablo Porto'
    }
};

export const viewport = {
    themeColor: [
        { media: '(prefers-color-scheme: light)', color: '#ffffff' },
        { media: '(prefers-color-scheme: dark)', color: '#252525' }
    ],
    viewportFit: 'cover' as const
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body
                className={`${inter.variable} font-sans text-foreground antialiased bg-background flex flex-col min-h-screen overflow-x-clip`}>
                <ThemeProvider>
                    <Header />
                    <main className="flex-1 flex flex-col">{children}</main>
                    <Footer />
                </ThemeProvider>
                <Analytics />
            </body>
        </html>
    );
}
