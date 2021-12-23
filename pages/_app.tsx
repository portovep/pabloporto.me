import '../styles/globals.css';
import { AppProps } from 'next/app';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

export default function App({ Component, pageProps }: AppProps): JSX.Element {
    return (
        <>
            <Header />
            <Component {...pageProps} />
            <Footer />
        </>
    );
}
