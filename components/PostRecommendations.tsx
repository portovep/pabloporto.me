import { Fragment } from 'react';
import Link from 'next/link';
import { getRelatedPosts, type PostFrontmatter } from '@/lib/posts';
import type { PostTag } from '@/lib/content-types';

interface PostRecommendationsProps {
    currentId: string;
    tag: PostTag;
}

function PostList({ posts }: { posts: PostFrontmatter[] }) {
    return (
        <>
            {posts.map((post, index) => (
                <Fragment key={post.id}>
                    {index > 0 &&
                        (index === posts.length - 1
                            ? posts.length > 2
                                ? ', and '
                                : ' and '
                            : ', ')}
                    <Link href={`/blog/${post.id}`} className="text-link">
                        {post.title}
                    </Link>
                </Fragment>
            ))}
        </>
    );
}

export default function PostRecommendations({ currentId, tag }: PostRecommendationsProps) {
    const relatedPosts = getRelatedPosts(currentId, tag);

    return (
        <div className="md:px-10 max-w-5xl mt-12 border-t border-border pt-8 text-muted-foreground">
            <p>
                Follow along via{' '}
                <a href="/feed.xml" className="text-link">
                    RSS
                </a>{' '}
                or{' '}
                <a
                    href="https://www.instagram.com/porto.vga"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-link">
                    Instagram
                </a>
                .
            </p>
            {relatedPosts.length > 0 && (
                <p className="mt-4">
                    If you liked this, you might also enjoy <PostList posts={relatedPosts} />.
                </p>
            )}
        </div>
    );
}
