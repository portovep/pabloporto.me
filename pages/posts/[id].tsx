import Head from 'next/head';
import { GetStaticProps, GetStaticPaths } from 'next';
import Date from '../../components/Date/Date';
import Layout from '../../components/Layout/Layout';
import { getAllPostIds, getPostData, PostData } from '../../lib/posts';

type PostProps = {
    postData: PostData;
};

export default function Post({ postData }: PostProps) {
    return (
        <Layout>
            <Head>
                <title>{postData.title}</title>
            </Head>
            <article className="max-w-4xl px-10 my-4 py-6 bg-white rounded-lg shadow-md">
                <div className="flex justify-between items-center">
                    <span className="font-light text-gray-600">
                        <Date dateString={postData.date} />
                    </span>
                    <a
                        className="px-2 py-1 bg-gray-600 text-gray-100 font-bold rounded hover:bg-gray-500"
                        href="#">
                        {postData.tag || 'Random'}
                    </a>
                </div>
                <div className="mt-2">
                    <a className="text-2xl text-gray-700 font-bold hover:text-gray-600" href="#">
                        {postData.title}
                    </a>
                    <div
                        className="mt-2 text-gray-600"
                        dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
                    />
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
