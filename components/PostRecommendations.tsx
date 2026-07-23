import Link from 'next/link';
import NewsletterCta from '@/components/NewsletterCta';
import { getRelatedPosts } from '@/lib/posts';
import type { PostTag } from '@/lib/content-types';

interface PostRecommendationsProps {
    currentId: string;
    tag: PostTag;
}

export default function PostRecommendations({ currentId, tag }: PostRecommendationsProps) {
    const relatedPosts = getRelatedPosts(currentId, tag);

    return (
        <div className="md:px-10 max-w-5xl mt-12 border-t border-border pt-8 text-muted-foreground">
            <p>
                Follow me via{' '}
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
                <div className="mt-6">
                    <p>You might also enjoy:</p>
                    <ul className="mt-3 list-disc space-y-1 pl-5">
                        {relatedPosts.map((post) => (
                            <li key={post.id}>
                                <Link href={`/blog/${post.id}`} className="text-link font-medium">
                                    {post.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
            <NewsletterCta className="mt-8" />
        </div>
    );
}
