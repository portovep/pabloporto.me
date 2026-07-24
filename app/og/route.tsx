import { renderOgImage } from '@/lib/og-image';

// Generates share-card images on a stable URL (`/og?title=…&subtitle=…&eyebrow=…`)
// so metadata in lib/metadata.ts can point at a per-page card without relying on
// the hashed paths that colocated opengraph-image files produce.

export const runtime = 'nodejs';

const TITLE_MAX = 200;
const SUBTITLE_MAX = 200;
const EYEBROW_MAX = 60;

export function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const title = (searchParams.get('title') || 'Pablo Porto').slice(0, TITLE_MAX);
    const subtitle = searchParams.get('subtitle')?.slice(0, SUBTITLE_MAX) || undefined;
    const eyebrow = searchParams.get('eyebrow')?.slice(0, EYEBROW_MAX) || undefined;

    return renderOgImage({ title, subtitle, eyebrow });
}
