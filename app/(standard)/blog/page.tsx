import Link from 'next/link';
import PostSummary from '@/components/PostSummary';
import FilteredPosts from '@/components/FilteredPosts';
import { PageHeader } from '@/components/ui';
import { getSortedPostsData } from '@/lib/posts';
import { createMetadata } from '@/lib/metadata';
import { env } from '@/lib/env';

export const metadata = createMetadata(
    'Blog',
    'Long-form writing on software engineering, data platforms, AI-assisted delivery, and technical leadership, with career lessons from 12+ years in the industry.',
    '/blog'
);

export default async function BlogPage() {
    const allPostsData = getSortedPostsData();

    return (
        <section>
            <PageHeader title="Blog">
                My writing on software engineering, technical leadership and how to live a balanced
                life. Plus the occasional life update. You can also
                <Link
                    href="https://medium.com/@pablo.porto"
                    className="text-link"
                    rel="noopener noreferrer">
                    &nbsp;follow my writing on Medium.
                </Link>
            </PageHeader>
            {env.FEATURE_BLOG_MINIMAL_LIST ? (
                <FilteredPosts posts={allPostsData} />
            ) : (
                <ul data-testid="writing-intro" className="mt-8 space-y-6">
                    {allPostsData.map((postData) => {
                        return (
                            <li data-testid="post-summary" key={postData.id}>
                                {postData.type === 'Post' ? (
                                    <Link
                                        href={`/blog/${postData.id}`}
                                        className="text-link"
                                        rel="noopener noreferrer">
                                        <PostSummary postData={postData} />
                                    </Link>
                                ) : (
                                    <a
                                        href={postData.link}
                                        target="_blank"
                                        className="text-link"
                                        rel="noopener noreferrer">
                                        <PostSummary postData={postData} />
                                    </a>
                                )}
                            </li>
                        );
                    })}
                </ul>
            )}
        </section>
    );
}
