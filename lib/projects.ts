import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { parseMarkdownContent } from './markdown';
import { ProjectFrontmatterSchema } from './content-types';

const projectDirectory = path.join(process.cwd(), 'content/projects');

export type ProjectData = {
    id: string;
    contentHtml?: string;
} & ReturnType<typeof ProjectFrontmatterSchema.parse>;

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

const parseProject = async (fileName: string): Promise<ProjectData> => {
    const id = fileName.replace(/\.md$/, '');

    const fullPath = path.join(projectDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    const matterResult = matter(fileContents);
    const contentHtml = parseMarkdownContent(matterResult.content).toString();
    const frontmatter = ProjectFrontmatterSchema.parse(matterResult.data);

    return {
        id,
        contentHtml,
        ...frontmatter
    };
};
