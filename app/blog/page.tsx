import { Metadata } from 'next';
import Link from 'next/link';
import PageContainer from '@/components/PageContainer';
import PostSummary from '@/components/PostSummary';
import { PageHeader } from '@/components/ui';
import { getSortedPostsData } from '@/lib/posts';

export const metadata: Metadata = {
    title: 'Blog'
};

export default async function BlogPage() {
    const allPostsData = await getSortedPostsData();

    return (
        <PageContainer>
            <section className="mt-8 text-xl leading-6">
                <PageHeader title="Blog">
                    A collection of articles and papers about software and data engineering. You can
                    also
                    <Link
                        href="https://medium.com/@pablo.porto"
                        className="text-emerald-500 hover:text-emerald-600 font-medium"
                        rel="noopener noreferrer">
                        &nbsp;follow me on Medium.
                    </Link>
                </PageHeader>
                <ul data-testid="writing-intro" className="mt-8 space-y-6">
                    {allPostsData.map((postData) => {
                        return (
                            <li data-testid="post-summary" key={postData.id}>
                                {postData.type === 'Post' ? (
                                    <Link
                                        href={`/blog/${postData.id}`}
                                        className="text-emerald-500 lg:group-hover:text-emerald-600 font-medium"
                                        rel="noopener noreferrer">
                                        <PostSummary postData={postData} />
                                    </Link>
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
        </PageContainer>
    );
}
