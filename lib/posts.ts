import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import remark from 'remark';
import html from 'remark-html';

const postsDirectory = path.join(process.cwd(), 'content/posts');

export type PostData = {
    id: string;
    title: string;
    date: string;
    type: string;
    link?: string;
    contentHtml?: string;
    tag?: string;
};

export const getPostData = async (id: string): Promise<PostData> => {
    return await parsePost(`${id}.md`);
};

export const getSortedPostsData = async (): Promise<PostData[]> => {
    const fileNames = fs.readdirSync(postsDirectory);

    const posts = await Promise.all(fileNames.map(parsePost));

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
                id: fileName.replace(/\.md$/, '')
            }
        };
    });
};

const parsePost = async (fileName: string) => {
    const id = fileName.replace(/\.md$/, '');

    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    const matterResult = matter(fileContents);

    const processedContent = await remark().use(html).process(matterResult.content);
    const contentHtml = processedContent.toString();

    return {
        id,
        contentHtml,
        ...matterResult.data
    } as PostData;
};
