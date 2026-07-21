import { z } from 'zod';

export const PostTagSchema = z.enum(['life-updates', 'thinking', 'work']);

export type PostTag = z.infer<typeof PostTagSchema>;

export const POST_TAG_LABELS: Record<PostTag, string> = {
    'life-updates': 'Life Updates',
    thinking: 'Thinking',
    work: 'Work'
};

export const PostFrontmatterSchema = z.object({
    title: z.string(),
    date: z.string(),
    type: z.string(),
    link: z.string().optional(),
    tag: PostTagSchema,
    draft: z.boolean().optional(),
    description: z.string().optional(),
    canonicalUrl: z.string().url().optional(),
    image: z.string().optional(),
    imageAlt: z.string().optional()
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
