import '../styles/globals.css';
import { AppProps } from 'next/app';
import { Inter } from '@next/font/google';
import { Analytics } from '@vercel/analytics/react';

import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter'
});

export default function App({ Component, pageProps }: AppProps): JSX.Element {
    return (
        <div
            className={`${inter.variable} font-sans text-slate-900 antialiased bg-gray-50 flex flex-col min-h-screen`}>
            <Header />
            <Component {...pageProps} />
            <Footer />
            <Analytics />
        </div>
    );
}
