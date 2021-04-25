import { GetStaticProps } from 'next';
import Head from 'next/head';
import Layout, { siteTitle } from '../../components/Layout/Layout';
import PostSummary from '../../components/PostSummary/PostSummary';
import { getSortedPostsData, PostData } from '../../lib/posts';

type BlogProps = {
    allPostsData: PostData[];
};

export default function Blog({ allPostsData }: BlogProps): JSX.Element {
    return (
        <Layout>
            <Head>
                <title>{`${siteTitle} - Blog`}</title>
            </Head>

            <section className="mt-8 text-xl leading-6">
                <h1 className="ml-2 text-4xl font-bold text-gray-700 md:text-4xl">My blog</h1>
                <p className="ml-2 mt-5 text-lg sm:text-xl sm:leading-10 space-y-6 max-w-3xl">
                    A collection of articles and papers I wrote about software engineering over the
                    years.
                </p>
                <ul className="mt-8">
                    {allPostsData.map((postData) => (
                        <li key={postData.id}>
                            <PostSummary postData={postData} />
                        </li>
                    ))}
                </ul>
            </section>
        </Layout>
    );
}

export const getStaticProps: GetStaticProps = async () => {
    const allPostsData = await getSortedPostsData();
    return {
        props: {
            allPostsData
        }
    };
};
