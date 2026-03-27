import { z } from 'zod';

export const PostFrontmatterSchema = z.object({
    title: z.string(),
    date: z.string(),
    type: z.string(),
    link: z.string().optional(),
    tag: z.string().optional()
});

export type PostFrontmatter = z.infer<typeof PostFrontmatterSchema>;

export const ProjectFrontmatterSchema = z.object({
    name: z.string(),
    date: z.string(),
    roles: z.array(z.string()),
    location: z.string(),
    description: z.string().optional(),
    teamSize: z.number(),
    industry: z.string(),
    technologies: z.array(z.string())
});

export type ProjectFrontmatter = z.infer<typeof ProjectFrontmatterSchema>;
