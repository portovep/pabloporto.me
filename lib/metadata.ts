import { Metadata } from 'next';

interface CreateMetadataOptions {
    // Override the canonical URL when a post is cross-posted from elsewhere.
    canonicalUrl?: string;
    // Blog posts should be `article`; everything else defaults to `website`.
    type?: 'website' | 'article';
    // ISO date used for `article:published_time` on blog posts.
    publishedTime?: string;
    // Small label rendered above the title on the generated share card.
    eyebrow?: string;
}

// Builds the URL of a per-page share card served by app/og/route.tsx.
export function ogImageUrl(title: string, subtitle?: string, eyebrow?: string): string {
    const params = new URLSearchParams({ title });
    if (subtitle) params.set('subtitle', subtitle);
    if (eyebrow) params.set('eyebrow', eyebrow);
    return `/og?${params.toString()}`;
}

export function createMetadata(
    title: string,
    description: string,
    path: string,
    options: CreateMetadataOptions = {}
): Metadata {
    const { canonicalUrl, type = 'website', publishedTime, eyebrow } = options;
    const fullTitle = `${title} | Pablo Porto`;
    const image = ogImageUrl(title, description, eyebrow);

    return {
        title,
        description,
        alternates: {
            canonical: canonicalUrl ?? path
        },
        openGraph: {
            type,
            siteName: 'Pablo Porto',
            locale: 'en_US',
            title: fullTitle,
            description,
            url: path,
            images: [{ url: image, width: 1200, height: 630, alt: fullTitle }],
            ...(type === 'article' && publishedTime
                ? { publishedTime, authors: ['Pablo Porto'] }
                : {})
        },
        twitter: {
            card: 'summary_large_image',
            title: fullTitle,
            description,
            images: [image]
        }
    };
}
