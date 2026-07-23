'use client';

import { useState, useMemo } from 'react';
import PostIndex from '@/components/PostIndex';
import { Button } from '@/components/ui/button';
import { POST_TAG_LABELS, type PostTag } from '@/lib/content-types';
import type { PostFrontmatter } from '@/lib/posts';
import { cn } from '@/lib/utils';

interface FilteredPostsProps {
    posts: PostFrontmatter[];
}

const TAGS = Object.keys(POST_TAG_LABELS) as PostTag[];

export default function FilteredPosts({ posts }: FilteredPostsProps) {
    const [selectedTag, setSelectedTag] = useState<PostTag | null>(null);

    const filteredPosts = useMemo(
        () => (selectedTag ? posts.filter((post) => post.tag === selectedTag) : posts),
        [posts, selectedTag]
    );

    const toggleTag = (tag: PostTag) => {
        setSelectedTag((prev) => (prev === tag ? null : tag));
    };

    return (
        <div className="mt-10">
            <div
                className="flex flex-wrap items-center gap-2 border-b border-border/60 pb-4"
                data-testid="tag-filters">
                <Button
                    variant={selectedTag ? 'outline' : 'accent'}
                    size="sm"
                    onClick={() => setSelectedTag(null)}
                    className="rounded-full"
                    data-testid="tag-filter-all"
                    data-selected={(!selectedTag).toString()}>
                    All
                </Button>
                {TAGS.map((tag) => {
                    const isSelected = selectedTag === tag;
                    return (
                        <Button
                            key={tag}
                            variant={isSelected ? 'accent' : 'outline'}
                            size="sm"
                            onClick={() => toggleTag(tag)}
                            className="rounded-full"
                            data-testid={`tag-filter-${tag}`}
                            data-selected={isSelected.toString()}>
                            {POST_TAG_LABELS[tag]}
                        </Button>
                    );
                })}
                <span
                    className={cn(
                        'ml-auto text-sm text-muted-foreground tabular-nums',
                        !selectedTag && 'invisible'
                    )}
                    aria-hidden={!selectedTag}
                    data-testid="filtered-count">
                    {filteredPosts.length} of {posts.length} posts
                </span>
            </div>
            {filteredPosts.length > 0 ? (
                <PostIndex posts={filteredPosts} className="mt-8" />
            ) : (
                <p className="mt-8 text-muted-foreground" data-testid="no-posts-found">
                    No posts found for this tag.
                </p>
            )}
        </div>
    );
}
