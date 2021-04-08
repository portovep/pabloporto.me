import Link from 'next/link';
import Head from 'next/head';
import Layout, { siteTitle } from '../components/Layout/Layout';
import styles from '../styles/Home.module.css';

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
                        You can access to some test articles
                        <Link href={`/posts`}>
                            <a
                                className="text-indigo-600 hover:text-indigo-800"
                                rel="noopener noreferrer">
                                &nbsp;here.&nbsp;
                            </a>
                        </Link>
                        These are my favourite tools an techniques.
                    </p>
                </div>
            </section>

            <div className="flex flex-col justify-center items-center mt-10">
                <div className="flex flex-wrap items-center justify-center max-w-full flex-col md:max-w-4xl md:flex-row">
                    <Link href="/stacks/frontend">
                        <a className={styles.card} rel="noopener noreferrer">
                            <h3>Frontend &rarr;</h3>
                            <p>Find in-depth information about Next.js features and API.</p>
                        </a>
                    </Link>

                    <a href="https://nextjs.org/learn" className={styles.card}>
                        <h3>Backend &rarr;</h3>
                        <p>Learn about Next.js in an interactive course with quizzes!</p>
                    </a>

                    <a
                        href="https://github.com/vercel/next.js/tree/master/examples"
                        className={styles.card}>
                        <h3>Infrastructure &rarr;</h3>
                        <p>Discover and deploy boilerplate example Next.js projects.</p>
                    </a>

                    <a
                        href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                        className={styles.card}>
                        <h3>Data engineering &rarr;</h3>
                        <p>Instantly deploy your Next.js site to a public URL with Vercel.</p>
                    </a>

                    <a
                        href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                        className={styles.card}>
                        <h3>Techniques &rarr;</h3>
                        <p>Instantly deploy your Next.js site to a public URL with Vercel.</p>
                    </a>

                    <a
                        href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                        className={styles.card}>
                        <h3>Leadership &rarr;</h3>
                        <p>Instantly deploy your Next.js site to a public URL with Vercel.</p>
                    </a>
                </div>
            </div>
        </Layout>
    );
}
