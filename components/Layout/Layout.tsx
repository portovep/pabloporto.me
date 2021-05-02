import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Footer from '../Footer/Footer';

const name = 'Pablo Porto';
export const siteTitle = 'Pablo Porto';
const siteDescription =
    'Software developer, tech lead, and traveller. Currently helping companies go digital at ThoughtWorks.';

type LayoutProps = {
    children: React.ReactNode;
    home?: boolean;
    pageTitle?: string;
};

export default function Layout({ children, home, pageTitle }: LayoutProps): JSX.Element {
    return (
        <div className="max-w-4xl px-0 py-4 mx-auto mt-16">
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <title>{pageTitle}</title>
                <meta property="og:type" content="website" />
                <meta property="og:title" content={pageTitle} />
                <meta name="twitter:title" content={pageTitle} />
                <meta name="description" content={pageTitle} />
                <meta property="og:description" content={siteDescription} />
                <meta name="twitter:description" content={siteDescription} />

                <meta property="og:image" content="/images/profile.jpg" />
                <meta name="twitter:image" content="/images/profile.jpg" />
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
