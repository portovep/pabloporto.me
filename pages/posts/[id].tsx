import Head from 'next/head';
import { GetStaticProps, GetStaticPaths } from 'next';
import Date from '../../components/Date/Date';
import Layout from '../../components/Layout/Layout';
import PostBody from '../../components/PostBody/PostBody';
import { getAllPostIds, getPostData, PostData } from '../../lib/posts';

type PostProps = {
    postData: PostData;
};

export default function Post({ postData }: PostProps): JSX.Element {
    return (
        <Layout>
            <Head>
                <title>{postData.title}</title>
            </Head>
            <article className="max-w-5xl px-10 my-4 py-6 bg-white rounded-lg shadow-md">
                <div className="flex justify-between items-center">
                    <span className="font-light text-gray-600">
                        <Date dateString={postData.date} />
                    </span>
                    <span className="px-2 py-1 bg-gray-600 text-gray-100 font-bold rounded hover:bg-gray-500">
                        {postData.tag || 'Random'}
                    </span>
                </div>
                <div className="mt-9">
                    <h2 className="text-5xl text-gray-700 font-bold hover:text-gray-600">
                        {postData.title}
                    </h2>
                    <PostBody contentHtml={postData.contentHtml} />
                </div>
            </article>
        </Layout>
    );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const postData = await getPostData(params.id as string);
    return {
        props: {
            postData
        }
    };
};

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = await getAllPostIds();
    return {
        paths,
        fallback: false
    };
};
