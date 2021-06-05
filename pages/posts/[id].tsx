import { GetStaticProps, GetStaticPaths } from 'next';
import Date from '../../components/Date/Date';
import Label from '../../components/Label/Label';
import Layout from '../../components/Layout/Layout';
import PostBody from '../../components/PostBody/PostBody';
import { getAllPostIds, getPostData, PostData } from '../../lib/posts';

type PostProps = {
    postData: PostData;
};

export default function Post({ postData }: PostProps): JSX.Element {
    return (
        <Layout pageTitle={postData.title}>
            <article className="max-w-5xl px-10 py-6 my-4 bg-white rounded-lg shadow-md">
                <div className="flex items-center justify-between">
                    <span className="font-light text-gray-600">
                        <Date dateString={postData.date} />
                    </span>
                    <Label text={postData.tag || 'Random'} />
                </div>
                <div className="mt-9">
                    <h2 className="hover:text-gray-600 text-5xl font-bold text-gray-700">
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
