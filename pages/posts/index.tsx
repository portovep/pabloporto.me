import { GetStaticProps } from 'next';
import Head from 'next/head';
import Layout, { siteTitle } from '../../components/Layout/Layout';
import PostSummary from '../../components/PostSummary/PostSummary';
import { getSortedPostsData, PostData } from '../../lib/posts';

type BlogProps = {
    allPostsData: PostData[];
};

export default function Blog({ allPostsData }: BlogProps) {
    return (
        <Layout>
            <Head>
                <title>{`${siteTitle} - Blog`}</title>
            </Head>

            <section className="text-xl leading-6">
                <h1 className="text-xl font-bold text-gray-700 md:text-2xl">Posts</h1>
                <ul className="mt-5">
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
