import { GetStaticProps } from 'next';
import Link from 'next/link';
import Layout from '../../components/Layout/Layout';
import PostSummary from '../../components/PostSummary/PostSummary';
import { SectionDescription, SectionTitle } from '../../components/ui';
import { getSortedPostsData, PostData } from '../../lib/posts';

type BlogProps = {
    allPostsData: PostData[];
};

export default function Blog({ allPostsData }: BlogProps): JSX.Element {
    return (
        <Layout pageTitle="Blog">
            <section className="mt-8 text-xl leading-6">
                <SectionTitle text="Blog" />
                <SectionDescription>
                    A collection of articles and papers about software engineering.
                </SectionDescription>
                <ul className="mt-8">
                    {allPostsData.map((postData) => {
                        return (
                            <li key={postData.id}>
                                {postData.type === 'Post' ? (
                                    (<Link
                                        href={`blog/${postData.id}`}
                                        className="text-emerald-500 lg:group-hover:text-emerald-600 font-medium"
                                        rel="noopener noreferrer">

                                        <PostSummary postData={postData} />

                                    </Link>)
                                ) : (
                                    <a
                                        href={postData.link}
                                        target="_blank"
                                        className="text-emerald-500 lg:group-hover:text-emerald-600 font-medium"
                                        rel="noopener noreferrer">
                                        <PostSummary postData={postData} />
                                    </a>
                                )}
                            </li>
                        );
                    })}
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
