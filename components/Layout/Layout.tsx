import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Footer from '../Footer/Footer';

const name = 'Pablo Porto';
export const siteTitle = 'Pablo Porto Veloso';

type LayoutProps = {
    children: React.ReactNode;
    home?: boolean;
};

export default function Layout({ children, home }: LayoutProps): JSX.Element {
    return (
        <div className="max-w-4xl px-0 py-4 mx-auto mt-16">
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <meta name="description" content="" />
                <meta
                    property="og:image"
                    content={`https://og-image.vercel.app/${encodeURI(
                        siteTitle
                    )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
                />
                <meta name="og:title" content={siteTitle} />
                <meta name="twitter:card" content="summary_large_image" />
            </Head>
            <header className="flex flex-col items-center">
                {home ? (
                    <>
                        <Image
                            priority
                            src="/images/profile.jpg"
                            className="rounded-full"
                            height={144}
                            width={144}
                            alt={name}
                        />
                    </>
                ) : (
                    <>
                        <Link href="/">
                            <a>
                                <Image
                                    priority
                                    src="/images/profile.jpg"
                                    className="rounded-full"
                                    height={108}
                                    width={108}
                                    alt={name}
                                />
                            </a>
                        </Link>
                        <h2 className="text-2xl leading-6 mt-4">
                            <Link href="/">
                                <a className="text-current">{name}</a>
                            </Link>
                        </h2>
                    </>
                )}
            </header>
            <main className="mx-4">{children}</main>
            {!home && (
                <div className="text-lg ml-7 mt-12">
                    <Link href="/">
                        <a rel="noopener noreferrer">
                            <span className="hover:text-indigo-600">← Back to home</span>
                        </a>
                    </Link>
                </div>
            )}
            <Footer />
        </div>
    );
}
