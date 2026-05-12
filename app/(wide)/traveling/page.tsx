import Image from 'next/image';
import Link from 'next/link';
import { PageHeader } from '@/components/ui';
import WorldMapClient from './WorldMapClient';
import { createMetadata } from '@/lib/metadata';
import { collections } from '@/content/photography';

export const metadata = createMetadata(
    'Traveling',
    'Favourite travel destinations and photography from around the world.',
    '/traveling'
);

export default function TravelingPage() {
    return (
        <section data-testid="traveling-intro">
            <PageHeader title="Traveling" />

            <div className="mt-14 p-1 mb-8">
                <WorldMapClient />
            </div>

            <div className="space-y-4 mt-10 mb-10">
                <h2 className="font-heading text-foreground text-4xl sm:text-5xl inline-block font-extrabold tracking-tight">
                    Photography
                </h2>
                <p className="text-muted-foreground text-xl">
                    Here are some of the photos I&apos;ve taken. Shot with a Sony A6400 or Oneplus
                    13R. More on{' '}
                    <a
                        href="https://www.instagram.com/porto.vga"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-link">
                        Instagram
                    </a>
                    .
                </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8">
                {collections.map((col, i) => (
                    <Link
                        key={col.slug}
                        href={`/photography/${col.slug}`}
                        className="group block active:scale-[0.98] transition-transform">
                        <div className="overflow-hidden rounded-[20px] shadow-xl dark:shadow-none aspect-[3/4] relative">
                            <Image
                                src={col.cover}
                                alt={col.name}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                                placeholder="blur"
                                quality={80}
                                sizes="(max-width: 768px) 45vw, 33vw"
                                priority={i < 2}
                            />
                        </div>
                        <p className="font-heading mt-4 text-2xl font-semibold text-foreground">
                            {col.name}
                        </p>
                        <p className="text-sm text-muted-foreground">
                            {col.photos.length} {col.photos.length === 1 ? 'photo' : 'photos'}
                        </p>
                    </Link>
                ))}
            </div>
        </section>
    );
}
