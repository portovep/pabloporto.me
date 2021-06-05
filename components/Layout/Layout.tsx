import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Footer from '../Footer/Footer';

const name = 'Pablo Porto';
export const siteTitle = 'Pablo Porto';
const siteUrl = 'https://live.pabloporto.me/';
const siteImage = `${siteUrl}images/about.jpeg`;
const siteDescription =
    'Software developer. Traveller. I help companies go digital at ThoughtWorks.';

type LayoutProps = {
    children: React.ReactNode;
    hideHeader?: boolean;
    home?: boolean;
    wide?: boolean;
    pageTitle?: string;
};

export default function Layout({
    children,
    home,
    hideHeader,
    wide,
    pageTitle
}: LayoutProps): JSX.Element {
    const title = pageTitle || siteTitle;
    return (
        <div className={`${wide ? 'max-w-6xl' : 'max-w-4xl'} px-0 py-4 mx-auto mt-16`}>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <link rel="manifest" href="/site.webmanifest" />

                <title>{title}</title>
                <meta name="description" content={siteDescription} />
                <meta property="og:title" content={title} />
                <meta property="og:description" content={siteDescription} />
                <meta property="og:image" content={siteImage} />
                <meta property="og:image:alt" content="Pablo Porto"></meta>
                <meta property="og:locale" content="en_US"></meta>
                <meta property="og:type" content="website" />
                <meta property="og:url" content={siteUrl}></meta>
                <meta name="twitter:title" content={title} />
                <meta name="twitter:description" content={siteDescription} />
                <meta name="twitter:image" content={siteImage} />
                <meta name="twitter:creator" content="@portovep"></meta>
                <meta name="twitter:site" content="@portovep"></meta>
                <meta name="twitter:card" content="summary_large_image" />

                <meta name="robots" content="index,follow" />
                <meta name="googlebot" content="index,follow" />
            </Head>
            {!hideHeader && (
                <header className="flex flex-col items-center">
                    {home ? (
                        <>
                            <Link href="/about">
                                <a>
                                    <Image
                                        priority
                                        quality="100"
                                        src="/images/profile.jpg"
                                        className="rounded-full"
                                        height={144}
                                        width={144}
                                        alt={name}
                                    />
                                </a>
                            </Link>
                        </>
                    ) : (
                        <>
                            <Link href="/about">
                                <a>
                                    <div className="flex justify-around">
                                        <span className="relative inline-flex">
                                            <Image
                                                priority
                                                quality="100"
                                                src="/images/profile.jpg"
                                                className="rounded-full"
                                                height={108}
                                                width={108}
                                                alt={name}
                                            />
                                            <span className="right-2 absolute top-0 flex w-3 h-3 -mt-1 -mr-1">
                                                <span className="animate-ping bg-emerald-300 absolute inline-flex w-full h-full rounded-full opacity-75"></span>
                                                <span className="bg-emerald-400 relative inline-flex w-3 h-3 rounded-full"></span>
                                            </span>
                                        </span>
                                    </div>
                                </a>
                            </Link>
                            <h2 className="mt-4 text-2xl leading-6">
                                <Link href="/about">
                                    <a className="text-current">{name}</a>
                                </Link>
                            </h2>
                        </>
                    )}
                </header>
            )}
            <main className="mx-4 antialiased">{children}</main>
            {!home && (
                <div className="ml-7 mt-12 text-lg">
                    <Link href="/">
                        <a rel="noopener noreferrer">
                            <span className="hover:text-emerald-600 font-medium">
                                <span aria-hidden="true" className="mr-2">
                                    ←
                                </span>
                                Back to home
                            </span>
                        </a>
                    </Link>
                </div>
            )}
            <Footer />
        </div>
    );
}
