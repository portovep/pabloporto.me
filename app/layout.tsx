import '../styles/globals.css';
import { Inter } from 'next/font/google';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import React from 'react';

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter'
});

export const metadata = {
    title: 'Pablo Porto',
    description: 'Personal website of Pablo Porto'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body
                className={`${inter.variable} font-sans text-slate-900 antialiased bg-gray-50 flex flex-col min-h-screen`}>
                <Header />
                <main className="flex-1 flex flex-col">{children}</main>
                <Footer />
            </body>
        </html>
    );
}
