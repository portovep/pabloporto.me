import { GetStaticProps, GetStaticPaths } from 'next';
import Image from 'next/image';
import Layout from '../../components/Layout/Layout';
import PostBody from '../../components/PostBody/PostBody';
import { getAllPostIds, getPostData, PostData } from '../../lib/posts';
import { Date, Label } from '../../components/ui';

type PostProps = {
    postData: PostData;
};

export default function Post({ postData }: PostProps): JSX.Element {
    return (
        <Layout pageTitle={postData.title}>
            <div className="md:-mb-10 flex justify-around -mb-10">
                <span className="relative inline-flex">
                    <Image
                        priority
                        quality="100"
                        src="/images/profile.jpg"
                        className="rounded-full"
                        height={108}
                        width={108}
                        alt={'Author photo'}
                    />
                </span>
            </div>
            <article className="md:px-10 max-w-5xl px-4 py-6 my-4 bg-white rounded-lg shadow-md">
                <div className="flex items-center justify-between">
                    <span className="font-light text-gray-600">
                        <Date dateString={postData.date} />
                    </span>
                    <Label text={postData.tag || 'Random'} />
                </div>
                <div className="mt-9">
                    <h2 className="md:text-5xl text-4xl font-bold text-gray-700">
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
