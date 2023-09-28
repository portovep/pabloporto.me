import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { micromark } from 'micromark';
import { gfm, gfmHtml } from 'micromark-extension-gfm';
import { parseMarkdownContent } from './markdown';

const projectDirectory = path.join(process.cwd(), 'content/projects');

export type ProjectData = {
    id: string;
    name: string;
    date: string;
    roles: string[];
    location: string;
    description: string;
    teamSize: number;
    industry: string;
    technologies: string[];
    contentHtml?: string;
};

export const getSortedProjectData = async (): Promise<ProjectData[]> => {
    const fileNames = fs.readdirSync(projectDirectory);

    const posts = await Promise.all(fileNames.map(parseProject));

    return posts.sort((a: ProjectData, b: ProjectData) => {
        if (a.date < b.date) {
            return 1;
        } else {
            return -1;
        }
    });
};

const parseProject = async (fileName: string) => {
    const id = fileName.replace(/\.md$/, '');

    const fullPath = path.join(projectDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    const matterResult = matter(fileContents);

    const processedContent = parseMarkdownContent(matterResult.content);
    const contentHtml = processedContent.toString();

    return {
        id,
        contentHtml,
        ...matterResult.data
    } as ProjectData;
};
