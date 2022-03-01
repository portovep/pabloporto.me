import Head from 'next/head';

export const siteTitle = 'Pablo Porto';
const siteUrl = 'https://pabloporto.me/';
const siteImage = `${siteUrl}images/about.jpeg`;
const siteDescription =
    'I enjoy making software and traveling the world. Currently helping companies go digital at ThoughtWorks.';

type MetaProps = {
    pageTitle?: string;
};

export default function Meta({ pageTitle }: MetaProps): JSX.Element {
    const title = pageTitle ? `${siteTitle} - ${pageTitle}` : siteTitle;
    return (
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
    );
}
