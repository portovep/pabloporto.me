import '../styles/globals.css';
import { AppProps } from 'next/app';
import { Analytics } from '@vercel/analytics/react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

export default function App({ Component, pageProps }: AppProps): JSX.Element {
    return (
        <div className="bg-gray-50 flex flex-col min-h-screen">
            <Header />
            <Component {...pageProps} />
            <Footer />
            <Analytics />
        </div>
    );
}
