import { z } from 'zod';

// Tags are free-form slugs rather than a fixed list, so a new category only needs
// to be set in a post's frontmatter — the blog filter picks it up from the content.
export const PostTagSchema = z
    .string()
    .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, 'Tag must be a lowercase slug, e.g. "life-updates"');

export type PostTag = z.infer<typeof PostTagSchema>;

// Labels that title-casing would get wrong (acronyms, stylised names). Any tag not
// listed here is derived from its slug: "life-updates" becomes "Life Updates".
const TAG_LABEL_OVERRIDES: Record<string, string> = {};

export const formatTagLabel = (tag: PostTag): string =>
    TAG_LABEL_OVERRIDES[tag] ??
    tag
        .split('-')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');

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
