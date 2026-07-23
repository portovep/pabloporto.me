import Link from 'next/link';
import { groupPostsByYear } from '@/lib/posts-by-year';
import type { PostFrontmatter } from '@/lib/posts';
import { Date } from '@/components/ui';
import { cn } from '@/lib/utils';

interface PostIndexProps {
    posts: PostFrontmatter[];
    className?: string;
}

interface PostRowProps {
    post: PostFrontmatter;
}

function PostRow({ post }: PostRowProps) {
    const { type, title, date } = post;
    const isExternal = type !== 'Post';
    const showType = type && type !== 'Post';

    const rowContent = (
        <span className="group flex items-baseline justify-between gap-4 py-3">
            <span className="text-foreground group-hover:text-emerald-600 dark:group-hover:text-emerald-500 font-medium transition-colors">
                {title}
                {isExternal && (
                    <span aria-hidden="true" className="text-muted-foreground ml-1.5">
                        ↗
                    </span>
                )}
            </span>
            <span className="text-muted-foreground flex shrink-0 items-baseline gap-3 text-sm">
                {showType && <span className="hidden sm:inline">{type}</span>}
                <Date dateString={date} dateFormat="LLL d" />
            </span>
        </span>
    );

    const className = 'block border-b border-border/60';

    return (
        <li data-testid="post-summary">
            {isExternal ? (
                <a
                    href={post.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(className)}>
                    {rowContent}
                </a>
            ) : (
                <Link href={`/blog/${post.id}`} className={cn(className)}>
                    {rowContent}
                </Link>
            )}
        </li>
    );
}

export default function PostIndex({ posts, className }: PostIndexProps) {
    const postsByYear = groupPostsByYear(posts);

    return (
        <div data-testid="writing-intro" className={cn('mt-10 space-y-10', className)}>
            {postsByYear.map(({ year, posts: yearPosts }) => (
                <section key={year} data-testid="post-year-group">
                    <h2 className="text-muted-foreground mb-1 text-sm font-medium tracking-wide">
                        {year}
                    </h2>
                    <ul>
                        {yearPosts.map((post) => (
                            <PostRow key={post.id} post={post} />
                        ))}
                    </ul>
                </section>
            ))}
        </div>
    );
}
