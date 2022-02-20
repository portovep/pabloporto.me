import Head from 'next/head';
import Link from 'next/link';

export const siteTitle = 'Pablo Porto';
const siteUrl = 'https://pabloporto.me/';
const siteImage = `${siteUrl}images/about.jpeg`;
const siteDescription =
    'I enjoy making software and traveling the world. Currently helping companies go digital at ThoughtWorks.';

type LayoutProps = {
    children: React.ReactNode;
    home?: boolean;
    wide?: boolean;
    pageTitle?: string;
};

export default function Layout({ children, home, wide, pageTitle }: LayoutProps): JSX.Element {
    const title = pageTitle || siteTitle;
    return (
        <div className={`${wide ? 'max-w-6xl' : 'max-w-4xl'} px-0 py-0 mx-auto mt-4`}>
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
        </div>
    );
}
