import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { PostFrontmatterSchema } from './content-types';
import type { ComponentType } from 'react';

const postsDirectory = path.join(process.cwd(), 'content/posts');

export type PostFrontmatter = {
    id: string;
} & ReturnType<typeof PostFrontmatterSchema.parse>;

export type PostData = PostFrontmatter & {
    Content: ComponentType;
};

export const getPostData = async (id: string): Promise<PostData> => {
    const fullPath = path.join(postsDirectory, `${id}.mdx`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data } = matter(fileContents);
    const frontmatter = PostFrontmatterSchema.parse(data);
    const { default: Content } = await import(`@/content/posts/${id}.mdx`);

    return { id, Content, ...frontmatter };
};

export const getSortedPostsData = (): PostFrontmatter[] => {
    const fileNames = fs.readdirSync(postsDirectory);

    const posts = fileNames.map((fileName) => {
        const id = fileName.replace(/\.mdx$/, '');
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const { data } = matter(fileContents);
        const frontmatter = PostFrontmatterSchema.parse(data);
        return { id, ...frontmatter };
    });

    return posts.sort((a: PostFrontmatter, b: PostFrontmatter) => {
        if (a.date < b.date) {
            return 1;
        } else {
            return -1;
        }
    });
};

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

export const getAllPostIds = (): { params: { id: string } }[] => {
    const fileNames = fs.readdirSync(postsDirectory);

    return fileNames.map((fileName) => {
        return {
            params: {
                id: fileName.replace(/\.mdx$/, '')
            }
        };
    });
};
