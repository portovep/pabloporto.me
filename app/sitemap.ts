import { MetadataRoute } from 'next';
import { getAllPostIds } from '@/lib/posts';

const baseUrl = 'https://pabloporto.me';

const staticRoutes = [
    { path: '', priority: 1.0, changeFrequency: 'monthly' as const },
    { path: '/about', priority: 0.9, changeFrequency: 'monthly' as const },
    { path: '/blog', priority: 0.9, changeFrequency: 'weekly' as const },
    { path: '/working', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/speaking', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/reading', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/making', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/traveling', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/stack', priority: 0.6, changeFrequency: 'monthly' as const },
    { path: '/bucharest', priority: 0.6, changeFrequency: 'monthly' as const }
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const postIds = await getAllPostIds();

    const blogEntries: MetadataRoute.Sitemap = postIds.map(({ params }) => ({
        url: `${baseUrl}/blog/${params.id}`,
        priority: 0.7,
        changeFrequency: 'monthly'
    }));

    const staticEntries: MetadataRoute.Sitemap = staticRoutes.map(
        ({ path, priority, changeFrequency }) => ({
            url: `${baseUrl}${path}`,
            priority,
            changeFrequency
        })
    );

    return [...staticEntries, ...blogEntries];
}
