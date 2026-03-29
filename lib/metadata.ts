import { Metadata } from 'next';

export function createMetadata(title: string, description: string, path: string): Metadata {
    const fullTitle = `${title} | Pablo Porto`;
    return {
        title,
        description,
        alternates: {
            canonical: path
        },
        openGraph: {
            title: fullTitle,
            description,
            url: path
        },
        twitter: {
            title: fullTitle,
            description
        }
    };
}
