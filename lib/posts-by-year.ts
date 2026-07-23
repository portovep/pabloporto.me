import type { PostFrontmatter } from './posts';

export type PostsByYear = {
    year: number;
    posts: PostFrontmatter[];
}[];

export const groupPostsByYear = (posts: PostFrontmatter[]): PostsByYear => {
    const groups = new Map<number, PostFrontmatter[]>();

    for (const post of posts) {
        const year = new Date(post.date).getFullYear();
        const group = groups.get(year);
        if (group) {
            group.push(post);
        } else {
            groups.set(year, [post]);
        }
    }

    return Array.from(groups.entries())
        .sort(([a], [b]) => b - a)
        .map(([year, yearPosts]) => ({ year, posts: yearPosts }));
};
