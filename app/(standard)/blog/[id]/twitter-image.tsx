import { getAllPostIds } from '@/lib/posts';
import { OG_CONTENT_TYPE, OG_SIZE } from '@/lib/og-image';

// See app/twitter-image.tsx — the site declares `summary_large_image`, so the
// per-post card is stated explicitly rather than left to og:image fallback.

export const runtime = 'nodejs';

export const alt = 'Pablo Porto — blog post';
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export function generateStaticParams() {
    return getAllPostIds().map(({ params }) => ({ id: params.id }));
}

export { default } from './opengraph-image';
