import { Metadata } from 'next';
import Link from 'next/link';
import { cn } from '@/app/lib/utils';
import { buttonVariants } from '@/components/ui/button';
import { MapPin, ExternalLink } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Bucharest Recommendations | Pablo Porto',
    description:
        'Discover the best places to visit in Bucharest, Romania. A curated collection of restaurants, cafes, attractions, and hidden gems in the vibrant capital city.',
    keywords: [
        'Bucharest',
        'Romania',
        'travel',
        'recommendations',
        'restaurants',
        'cafes',
        'attractions',
        'travel guide'
    ],
    authors: [{ name: 'Pablo Porto' }],
    creator: 'Pablo Porto',
    publisher: 'Pablo Porto',
    formatDetection: {
        email: false,
        address: false,
        telephone: false
    },
    metadataBase: new URL('https://pabloporto.me'),
    alternates: {
        canonical: '/bucharest'
    },
    openGraph: {
        title: 'Bucharest Recommendations | Pablo Porto',
        description:
            'Discover the best places to visit in Bucharest, Romania. A curated collection of restaurants, cafes, attractions, and hidden gems in the vibrant capital city.',
        url: '/bucharest',
        siteName: 'Pablo Porto',
        images: [
            {
                url: '/images/bucharest-og.jpg',
                width: 1200,
                height: 630,
                alt: 'Bucharest city skyline and recommendations'
            }
        ],
        locale: 'en_US',
        type: 'website'
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Bucharest Recommendations | Pablo Porto',
        description:
            'Discover the best places to visit in Bucharest, Romania. A curated collection of restaurants, cafes, attractions, and hidden gems.',
        images: ['/images/bucharest-og.jpg'],
        creator: '@pabloporto'
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1
        }
    }
};

export default function BucharestPage() {
    return (
        <>
            {/* Hero Section */}
            <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
                <div className="container mx-auto flex max-w-[64rem] flex-col items-center gap-4 text-center">
                    <div className="rounded-2xl bg-muted px-4 py-1.5 text-sm font-medium flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        Travel Guide
                    </div>
                    <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
                        Bucharest
                    </h1>
                    <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
                        Romania's vibrant capital where Belle Époque elegance meets modern European
                        sophistication. A curated collection of the best places to discover.
                    </p>
                    <div className="space-x-4">
                        <Link
                            href="https://www.google.com/collections/s/list/krdxOwdcCxmD0ZHb-XqPOK9qyRD27g/CEagodeCYqI"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={cn(
                                buttonVariants({ size: 'lg' }),
                                'inline-flex items-center gap-2'
                            )}>
                            <MapPin className="h-4 w-4" />
                            View Google Maps Places List
                            <ExternalLink className="h-4 w-4" />
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
