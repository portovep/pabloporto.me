import { Metadata } from 'next';
import Link from 'next/link';
import { createMetadata } from '@/lib/metadata';
import { cn } from '@/app/lib/utils';
import { buttonVariants } from '@/components/ui/button';
import { MapPin, ExternalLink } from 'lucide-react';
import PageContainer from '@/components/PageContainer';

const bucharestDescription =
    'My personal recommendations for Bucharest, Romania. Discover the incredible specialty coffee scene, stunning architecture, and exceptional fine cuisine that made this city special to me.';

const base = createMetadata('Bucharest Recommendations', bucharestDescription, '/bucharest');

export const metadata: Metadata = {
    ...base,
    openGraph: {
        ...base.openGraph,
        images: [
            {
                url: '/images/bucharest-og.jpg',
                width: 1200,
                height: 630,
                alt: 'Bucharest city skyline and recommendations'
            }
        ]
    },
    twitter: {
        ...base.twitter,
        card: 'summary_large_image',
        images: ['/images/bucharest-og.jpg'],
        creator: '@pabloporto'
    }
};

export default function BucharestPage() {
    return (
        <PageContainer>
            {/* Hero Section */}
            <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
                <div className="mx-auto flex max-w-2xl flex-col items-center gap-4 text-center">
                    <div className="rounded-2xl bg-muted px-4 py-1.5 text-sm font-medium flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        Travel Guide
                    </div>
                    <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
                        Bucharest
                    </h1>
                    <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
                        During my time in Romania&apos;s captivating capital, I discovered three
                        things that made Bucharest truly special: an incredible specialty coffee
                        scene, stunning Belle Époque architecture, and really high quality
                        restaurants.{' '}
                    </p>
                    <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
                        Here are my personal recommendations.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 sm:space-x-4 sm:gap-0">
                        <Link
                            href="https://www.google.com/collections/s/list/krdxOwdcCxmD0ZHb-XqPOK9qyRD27g/CEagodeCYqI"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={cn(
                                buttonVariants({ size: 'lg' }),
                                'inline-flex items-center justify-center gap-2 w-full sm:w-auto'
                            )}>
                            <MapPin className="h-4 w-4" />
                            View Google Maps Places List
                            <ExternalLink className="h-4 w-4" />
                        </Link>
                    </div>
                </div>
            </section>
        </PageContainer>
    );
}
