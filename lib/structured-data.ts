import { toIsoDate } from '@/lib/dates';

// JSON-LD structured data builders. Keeping the shapes here means the Person and
// BlogPosting schemas stay consistent with the site's canonical URLs and social links.

const SITE_URL = 'https://pabloporto.me';
const AUTHOR_NAME = 'Pablo Porto';

// Profiles the footer links to — used for the Person `sameAs` graph.
const SAME_AS = [
    'https://github.com/portovep',
    'https://linkedin.com/in/pabloportoveloso',
    'https://www.instagram.com/porto.vga',
    'https://medium.com/@pablo.porto'
];

const author = {
    '@type': 'Person',
    name: AUTHOR_NAME,
    url: SITE_URL
} as const;

export function buildPersonSchema() {
    return {
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: AUTHOR_NAME,
        url: SITE_URL,
        image: `${SITE_URL}/images/profile.webp`,
        jobTitle: 'Principal Engineer',
        worksFor: {
            '@type': 'Organization',
            name: 'Thoughtworks',
            url: 'https://thoughtworks.com'
        },
        sameAs: SAME_AS
    };
}

interface BlogPostingInput {
    id: string;
    title: string;
    description: string;
    datePublished: string;
    image?: string;
}

export function buildBlogPostingSchema({
    id,
    title,
    description,
    datePublished,
    image
}: BlogPostingInput) {
    const url = `${SITE_URL}/blog/${id}`;
    const publishedDate = toIsoDate(datePublished);
    const imageUrl = image
        ? `${SITE_URL}/images/${image}`
        : `${SITE_URL}/og?title=${encodeURIComponent(title)}`;

    return {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: title,
        description,
        image: [imageUrl],
        datePublished: publishedDate,
        dateModified: publishedDate,
        author,
        publisher: author,
        mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': url
        }
    };
}
