import { GetStaticProps } from 'next';
import Layout, { siteTitle } from '../../components/Layout/Layout';
import PostSummary from '../../components/PostSummary/PostSummary';
import SectionDescription from '../../components/SectionDescription/SectionDescription';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import { getSortedPostsData, PostData } from '../../lib/posts';

type BlogProps = {
    allPostsData: PostData[];
};

export default function Blog({ allPostsData }: BlogProps): JSX.Element {
    return (
        <Layout pageTitle={`${siteTitle} - Blog`}>
            <section className="mt-8 text-xl leading-6">
                <SectionTitle text="My Blog" />
                <SectionDescription>
                    A collection of articles and papers I wrote about software engineering over the
                    years.
                </SectionDescription>
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
