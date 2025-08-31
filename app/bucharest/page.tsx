import { Metadata } from 'next';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
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
        <div className="container mx-auto px-4 py-8 max-w-4xl">
            {/* Header Section */}
            <div className="text-center mb-12">
                <div className="flex items-center justify-center gap-2 mb-4">
                    <MapPin className="h-8 w-8 text-blue-600" />
                    <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">Bucharest</h1>
                </div>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                    Romania's vibrant capital
                </p>
            </div>

            {/* Description Section */}
            <Card className="mb-8 border-0 shadow-sm bg-gray-50/50">
                <CardContent className="pt-6">
                    <div className="prose prose-gray max-w-none">
                        <p className="text-lg leading-relaxed text-gray-700 mb-4">
                            Bucharest is a city of contrasts, where elegant Belle Époque
                            architecture meets communist-era brutalism, and where traditional
                            Romanian culture blends seamlessly with modern European sophistication.
                            Known as the "Paris of the East," this dynamic capital offers an
                            incredible mix of history, culture, and culinary experiences.
                        </p>
                        <p className="text-lg leading-relaxed text-gray-700">
                            From the grandeur of the Palace of Parliament to the charming
                            cobblestone streets of the Old Town, from innovative restaurants to cozy
                            traditional taverns, Bucharest rewards the curious traveler with
                            unexpected discoveries at every turn.
                        </p>
                    </div>
                </CardContent>
            </Card>

            {/* Google Places List Section */}
            <Card className="border-0 shadow-lg bg-white">
                <CardHeader className="text-center pb-4">
                    <CardTitle className="text-2xl font-semibold text-gray-900 mb-2">
                        My Curated Recommendations
                    </CardTitle>
                    <CardDescription className="text-lg text-gray-600">
                        A carefully selected collection of the best places I've discovered in
                        Bucharest
                    </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-8 mb-6">
                        <div className="flex items-center justify-center gap-3 mb-4">
                            <div className="p-3 bg-blue-100 rounded-full">
                                <MapPin className="h-6 w-6 text-blue-600" />
                            </div>
                            <h3 className="text-xl font-medium text-gray-900">
                                Explore My Google Places List
                            </h3>
                        </div>
                        <p className="text-gray-600 mb-6 max-w-md mx-auto">
                            Access my personal collection of restaurants, cafes, attractions, and
                            hidden gems that make Bucharest special.
                        </p>
                        <Button
                            asChild
                            size="lg"
                            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg font-medium shadow-md hover:shadow-lg transition-all duration-200">
                            <a
                                href="#"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2">
                                View Places List
                                <ExternalLink className="h-5 w-5" />
                            </a>
                        </Button>
                    </div>

                    <div className="text-sm text-gray-500 space-y-1">
                        <p>📍 Restaurants & Cafes</p>
                        <p>🏛️ Historical Sites & Museums</p>
                        <p>🌳 Parks & Outdoor Spaces</p>
                        <p>🎭 Cultural Venues & Nightlife</p>
                    </div>
                </CardContent>
            </Card>

            {/* Footer Note */}
            <div className="text-center mt-12 pt-8 border-t border-gray-200">
                <p className="text-gray-500 text-sm">
                    Last updated:{' '}
                    {new Date().toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                    })}
                </p>
            </div>
        </div>
    );
}
