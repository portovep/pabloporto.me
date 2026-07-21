import { getSortedPostsData } from '@/lib/posts';

export const dynamic = 'force-static';

const siteUrl = 'https://pabloporto.me';

function escapeXml(value: string): string {
    return value
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&apos;');
}

export async function GET() {
    const posts = getSortedPostsData().filter((post) => !post.draft);

    const items = posts
        .map((post) => {
            const url = `${siteUrl}/blog/${post.id}`;
            return `
        <item>
            <title>${escapeXml(post.title)}</title>
            <link>${url}</link>
            <guid>${url}</guid>
            <pubDate>${new Date(post.date).toUTCString()}</pubDate>
            ${post.description ? `<description>${escapeXml(post.description)}</description>` : ''}
        </item>`;
        })
        .join('');

    const feed = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
    <channel>
        <title>Pablo Porto</title>
        <link>${siteUrl}/blog</link>
        <description>Personal website of Pablo Porto</description>
        <language>en</language>${items}
    </channel>
</rss>`;

    return new Response(feed, {
        headers: {
            'Content-Type': 'application/rss+xml; charset=utf-8'
        }
    });
}
