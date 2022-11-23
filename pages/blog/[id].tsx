import { GetStaticProps, GetStaticPaths } from 'next';
import Image from 'next/image';
import Layout from '../../components/Layout/Layout';
import PostBody from '../../components/PostBody/PostBody';
import { getAllPostIds, getPostData, PostData } from '../../lib/posts';
import { Date, Label } from '../../components/ui';

type PostProps = {
    postData: PostData;
};

const showDraftAlert = (): JSX.Element => (
    <div
        className="dark:bg-gray-700 dark:text-gray-300 flex p-4 mt-4 mb-8 text-gray-700 bg-gray-100 rounded-lg"
        role="alert">
        <svg
            aria-hidden="true"
            className="flex-shrink-0 inline w-5 h-5 mr-3"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg">
            <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                clipRule="evenodd"></path>
        </svg>
        <span className="sr-only">Info</span>
        <div>
            This post is in draft state and may contain typos and missing sections. I will keep
            editing it until is ready.
        </div>
    </div>
);

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
                        style={{
                            maxWidth: '100%',
                            height: 'auto'
                        }}
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
                    {postData.tag == 'Draft' && showDraftAlert()}
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
