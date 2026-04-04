import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { PostFrontmatterSchema } from './content-types';
import type { ComponentType } from 'react';

const postsDirectory = path.join(process.cwd(), 'content/posts');

export type PostData = {
    id: string;
    Content?: ComponentType;
} & ReturnType<typeof PostFrontmatterSchema.parse>;

export const getPostData = async (id: string): Promise<PostData> => {
    const fullPath = path.join(postsDirectory, `${id}.mdx`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data } = matter(fileContents);
    const frontmatter = PostFrontmatterSchema.parse(data);
    const { default: Content } = await import(`@/content/posts/${id}.mdx`);

    return { id, Content, ...frontmatter };
};

export const getSortedPostsData = async (): Promise<PostData[]> => {
    const fileNames = fs.readdirSync(postsDirectory);

    const posts = fileNames.map((fileName) => {
        const id = fileName.replace(/\.mdx$/, '');
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const { data } = matter(fileContents);
        const frontmatter = PostFrontmatterSchema.parse(data);
        return { id, ...frontmatter };
    });

    return posts.sort((a: PostData, b: PostData) => {
        if (a.date < b.date) {
            return 1;
        } else {
            return -1;
        }
    });
};

export const getAllPostIds = async (): Promise<{ params: { id: string } }[]> => {
    const fileNames = fs.readdirSync(postsDirectory);

    return fileNames.map((fileName) => {
        return {
            params: {
                id: fileName.replace(/\.mdx$/, '')
            }
        };
    });
};
