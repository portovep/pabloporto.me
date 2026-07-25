import { getAllPostIds, getPostData } from '@/lib/posts';
import { OG_CONTENT_TYPE, OG_SIZE, renderPostCard } from '@/lib/og-image';

// Per-post share card. Overrides the site-wide one in app/opengraph-image.tsx.

export const runtime = 'nodejs';

export const alt = 'Pablo Porto — blog post';
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export function generateStaticParams() {
    return getAllPostIds().map(({ params }) => ({ id: params.id }));
}

export default async function Image({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const post = await getPostData(id);

    return renderPostCard({ title: post.title, subtitle: post.description });
}
