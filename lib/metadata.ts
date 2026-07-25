import { Metadata } from 'next';

// The generic share card, committed as a static asset. Regenerate it with
// `npm run og:card` after changing the design in lib/og-image.tsx.
export const OG_CARD = {
    url: '/images/og-card.png',
    width: 1200,
    height: 630,
    alt: 'Pablo Porto — pabloporto.me'
} as const;

interface CreateMetadataOptions {
    // Override the canonical URL when a post is cross-posted from elsewhere.
    canonicalUrl?: string;
    // Blog posts should be `article`; everything else defaults to `website'.
    type?: 'website' | 'article';
    // ISO date used for `article:published_time` on blog posts.
    publishedTime?: string;
    // Set by routes that ship their own opengraph-image file, so the generic
    // card isn't named here. Next replaces the whole `openGraph` object rather
    // than merging it, so an `images` set below would win over the file
    // convention and every post would share one card.
    generatedImage?: boolean;
}

export function createMetadata(
    title: string,
    description: string,
    path: string,
    options: CreateMetadataOptions = {}
): Metadata {
    const { canonicalUrl, type = 'website', publishedTime, generatedImage = false } = options;
    const fullTitle = `${title} | Pablo Porto`;

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
            ...(generatedImage ? {} : { images: [OG_CARD] }),
            ...(type === 'article' && publishedTime
                ? { publishedTime, authors: ['Pablo Porto'] }
                : {})
        },
        twitter: {
            card: 'summary_large_image',
            title: fullTitle,
            description,
            ...(generatedImage ? {} : { images: [OG_CARD.url] })
        }
    };
}
