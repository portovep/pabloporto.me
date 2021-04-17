import { projects as projectsData } from '../content/projectsData';

export type Project = {
    id: number;
    name: string;
    date: number;
    role: string;
    location: string;
    description: string;
    teamSize: number;
    technologies: string[];
};

export const getSortedPojectData = async (): Promise<Project[]> => {
    const projects = projectsData.map((project) => ({
        ...project,
        technologies: project.technologies.split(',')
    }));

    return projects.sort((a: Project, b: Project) => {
        if (a.date < b.date) {
            return 1;
        } else {
            return -1;
        }
    });
};
