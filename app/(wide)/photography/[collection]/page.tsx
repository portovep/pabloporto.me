import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Camera } from 'lucide-react';
import { createMetadata } from '@/lib/metadata';
import { collections } from '@/content/photography';
import PhotographyGallery from '@/components/PhotographyGallery';

export function generateStaticParams() {
    return collections.map((c) => ({ collection: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ collection: string }> }) {
    const { collection: slug } = await params;
    const col = collections.find((c) => c.slug === slug);
    if (!col) return {};
    return createMetadata(
        `Photography - ${col.name}`,
        `Photos from ${col.name}.`,
        `/photography/${slug}`
    );
}

export default async function CollectionPage({
    params
}: {
    params: Promise<{ collection: string }>;
}) {
    const { collection: slug } = await params;
    const col = collections.find((c) => c.slug === slug);
    if (!col) notFound();

    return (
        <section>
            <div className="space-y-4" data-testid="page-header">
                <h1 className="font-heading text-foreground text-4xl sm:text-5xl inline-flex items-center gap-3 font-extrabold tracking-tight">
                    <Camera
                        className="sm:hidden h-9 w-9"
                        strokeWidth={2.5}
                        aria-label="Photography"
                    />
                    <span className="hidden sm:inline">Photography</span>
                    <span>/ {col.name}</span>
                </h1>
            </div>
            <PhotographyGallery photos={col.photos} collectionName={col.name} />
            <Link
                href="/traveling#photography"
                className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors mt-12">
                <ArrowLeft className="h-4 w-4" />
                Back to Photography
            </Link>
        </section>
    );
}
