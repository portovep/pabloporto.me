import { Metadata } from 'next';
import { getShelvesByProfileId, getProfileIdFromHandle, type Shelf } from '@/lib/literal';
import { downloadBookCovers } from '@/lib/bookCovers';
import ShelfComponent from '@/components/Shelf/Shelf';

export const metadata: Metadata = {
    title: 'Reading | Pablo Porto',
    description: 'My book collection and reading lists from literal.club',
    keywords: ['books', 'reading', 'library', 'literature'],
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
        canonical: '/reading'
    },
    openGraph: {
        title: 'Reading | Pablo Porto',
        description: 'My book collection and reading lists from literal.club',
        url: '/reading',
        siteName: 'Pablo Porto',
        locale: 'en_US',
        type: 'website'
    },
    twitter: {
        card: 'summary',
        title: 'Reading | Pablo Porto',
        description: 'My book collection and reading lists from literal.club'
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

async function getShelves(): Promise<Shelf[]> {
    const apiToken = process.env.LITERAL_API_TOKEN;
    const profileId = process.env.LITERAL_PROFILE_ID;
    const profileHandle = process.env.LITERAL_PROFILE_HANDLE;

    if (!profileId && !profileHandle) {
        throw new Error(
            'Either LITERAL_PROFILE_ID or LITERAL_PROFILE_HANDLE must be set in environment variables'
        );
    }

    let finalProfileId = profileId;

    // If only handle is provided, fetch profile ID
    if (!finalProfileId && profileHandle) {
        finalProfileId = await getProfileIdFromHandle(profileHandle);
        if (!finalProfileId) {
            throw new Error(`Could not find profile with handle: ${profileHandle}`);
        }
    }

    if (!finalProfileId) {
        throw new Error('Profile ID is required');
    }

    try {
        // Fetch all shelves
        const shelves = await getShelvesByProfileId(finalProfileId!, 100, 0, apiToken);

        if (!shelves || shelves.length === 0) {
            console.warn(`No shelves found for profile ID: ${finalProfileId}`);
            return [];
        }

        // Fetch detailed book data for each shelf
        const shelvesWithBooks = await Promise.all(
            shelves.map(async (shelf) => {
                // Books are already included in getShelvesByProfileId response
                return shelf;
            })
        );

        // Download all book covers
        const allBooks = shelvesWithBooks.flatMap((shelf) => shelf.books || []);
        if (allBooks.length > 0) {
            await downloadBookCovers(allBooks);
        }

        return shelvesWithBooks;
    } catch (error) {
        console.error('Error fetching shelves:', error);
        // Re-throw with more context
        throw new Error(
            `Failed to fetch shelves: ${error instanceof Error ? error.message : String(error)}`
        );
    }
}

export default async function ReadingPage() {
    const shelves = await getShelves();

    return (
        <div className="container mx-auto px-4 sm:px-6 py-8 md:py-12 max-w-7xl">
            <div className="space-y-12 mb-12">
                <div className="space-y-4">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900">
                        Reading
                    </h1>
                    <p className="text-lg text-gray-600 max-w-2xl">
                        My book collection and reading lists from{' '}
                        <a
                            href="https://literal.club"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline hover:text-gray-900">
                            literal.club
                        </a>
                        .
                    </p>
                </div>

                <div className="space-y-16">
                    {shelves.length > 0 ? (
                        shelves.map((shelf) => <ShelfComponent key={shelf.id} shelf={shelf} />)
                    ) : (
                        <p className="text-gray-500">No shelves found.</p>
                    )}
                </div>
            </div>
        </div>
    );
}
