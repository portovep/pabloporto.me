import '../styles/globals.css';
import { Inter } from 'next/font/google';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import { ThemeProvider } from '@/components/ThemeProvider';
import React from 'react';

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter'
});

export const metadata = {
    title: 'Pablo Porto',
    description: 'Personal website of Pablo Porto'
};

export const viewport = {
    themeColor: [
        { media: '(prefers-color-scheme: light)', color: '#ffffff' },
        { media: '(prefers-color-scheme: dark)', color: '#252525' }
    ]
};

const themeScript = `
(function() {
  var key = 'pabloporto-theme';
  var stored = null;
  try { stored = localStorage.getItem(key); } catch (e) {}
  var resolved = stored === 'dark' ? 'dark' : (stored === 'system' ? (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light') : 'light');
  document.documentElement.classList.remove('light', 'dark');
  document.documentElement.classList.add(resolved);
  document.documentElement.style.colorScheme = resolved;
})();
`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body
                className={`${inter.variable} font-sans text-foreground antialiased bg-background flex flex-col min-h-screen`}>
                <script
                    dangerouslySetInnerHTML={{ __html: themeScript }}
                    suppressHydrationWarning
                />
                <ThemeProvider>
                    <Header />
                    <main className="flex-1 flex flex-col">{children}</main>
                    <Footer />
                </ThemeProvider>
            </body>
        </html>
    );
}
