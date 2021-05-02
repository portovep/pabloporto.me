import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Footer from '../Footer/Footer';

const name = 'Pablo Porto';
const siteUrl = 'https://live.pabloporto.me/';
export const siteTitle = 'Pablo Porto';
const siteDescription =
    'Software developer, tech lead, and traveller. Currently helping companies go digital at ThoughtWorks.';

type LayoutProps = {
    children: React.ReactNode;
    home?: boolean;
    pageTitle?: string;
};

export default function Layout({ children, home, pageTitle }: LayoutProps): JSX.Element {
    const title = pageTitle || siteTitle;
    return (
        <div className="max-w-4xl px-0 py-4 mx-auto mt-16">
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <title>{title}</title>
                <meta name="description" content={siteDescription} />
                <meta property="og:title" content={title} />
                <meta property="og:description" content={siteDescription} />
                <meta property="og:image" content={`${siteUrl}/images/profile.jpg`} />
                <meta property="og:image:alt" content="Pablo Porto"></meta>
                <meta property="og:locale" content="en_US"></meta>
                <meta property="og:type" content="website" />
                <meta property="og:url" content={siteUrl}></meta>
                <meta name="twitter:title" content={title} />
                <meta name="twitter:description" content={siteDescription} />
                <meta name="twitter:image" content={`${siteUrl}/images/profile.jpg`} />
                <meta name="twitter:creator" content="@portovep"></meta>
                <meta name="twitter:site" content="@portovep"></meta>
                <meta name="twitter:card" content="summary_large_image" />

                <meta name="robots" content="index,follow" />
                <meta name="googlebot" content="index,follow" />
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
                            <span className="hover:text-indigo-600">
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
