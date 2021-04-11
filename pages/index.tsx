import Head from 'next/head';
import Layout, { siteTitle } from '../components/Layout/Layout';
import Card from '../components/Card/Card';

export default function Home(): JSX.Element {
    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <section className="mt-12 text-xl leading-6">
                <div className="max-w-2xl px-6 text-center mx-auto">
                    <h2 className="text-3xl font-semibold text-gray-800">
                        Hi,
                        <span className="bg-indigo-600 text-white rounded px-1">I’m Pablo</span>.
                        Nice to meet you.
                    </h2>
                    <p className="text-gray-600 mt-4">
                        I am a Lead Software Consultant at&nbsp;
                        <a
                            href="https//thoughtworks.com"
                            target="_blank"
                            className="text-indigo-600 hover:text-indigo-800 font-medium"
                            rel="noopener noreferrer">
                            ThoughtWorks
                        </a>
                        &nbsp; that loves building digital products.&nbsp;I also like traveling and
                        discovering new places.
                    </p>
                </div>
            </section>

            <div className="flex flex-col justify-center items-center mt-10">
                <div className="flex flex-wrap items-center justify-center max-w-full flex-col md:max-w-4xl md:flex-row">
                    <Card
                        title="Writing"
                        description="Find in-depth information about Next.js features and API."
                        linkURL="/posts"
                    />
                    <Card
                        title="Working"
                        description="Find in-depth information about Next.js features and API."
                    />
                    <Card
                        title="Traveling"
                        description="Find in-depth information about Next.js features and API."
                    />
                    <Card
                        title="About"
                        description="Find in-depth information about Next.js features and API."
                    />
                </div>
            </div>
        </Layout>
    );
}
