import { Metadata } from 'next';
import { getShelvesByProfileId, getProfileIdFromHandle, type Shelf } from '@/lib/literal';
import { downloadBookCovers } from '@/lib/bookCovers';
import ShelfComponent from '@/components/Shelf/Shelf';
import PageContainer from '@/components/PageContainer/PageContainer';
import PageHeader from '@/components/ui/PageHeader/PageHeader';

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

// Shelves to exclude from display
const EXCLUDED_SHELF_SLUGS: string[] = ['work-2023-p92i4e5', 'career-vl09pnx'];

async function getShelves(): Promise<Shelf[]> {
    const apiToken = process.env.LITERAL_API_TOKEN;
    const profileId = process.env.LITERAL_PROFILE_ID;
    const profileHandle = process.env.LITERAL_PROFILE_HANDLE;

    // During build time, if env vars are not set, return empty array instead of throwing
    if (!profileId && !profileHandle) {
        console.warn(
            'Either LITERAL_PROFILE_ID or LITERAL_PROFILE_HANDLE must be set in environment variables. Returning empty shelves.'
        );
        return [];
    }

    let finalProfileId = profileId;

    // If only handle is provided, fetch profile ID
    if (!finalProfileId && profileHandle) {
        try {
            finalProfileId = await getProfileIdFromHandle(profileHandle);
            if (!finalProfileId) {
                console.warn(`Could not find profile with handle: ${profileHandle}`);
                return [];
            }
        } catch (error) {
            console.error('Error fetching profile ID from handle:', error);
            return [];
        }
    }

    if (!finalProfileId) {
        console.warn('Profile ID is required. Returning empty shelves.');
        return [];
    }

    try {
        // Fetch all shelves
        const shelves = await getShelvesByProfileId(finalProfileId!, 100, 0, apiToken);

        if (!shelves || shelves.length === 0) {
            console.warn(`No shelves found for profile ID: ${finalProfileId}`);
            return [];
        }

        // Filter out excluded shelves
        const filteredShelves = shelves.filter(
            (shelf) => !EXCLUDED_SHELF_SLUGS.includes(shelf.slug)
        );

        // Fetch detailed book data for each shelf
        const shelvesWithBooks = await Promise.all(
            filteredShelves.map(async (shelf) => {
                // Books are already included in getShelvesByProfileId response
                return shelf;
            })
        );

        // Download all book covers
        const allBooks = shelvesWithBooks.flatMap((shelf) => shelf.books || []);
        if (allBooks.length > 0) {
            try {
                await downloadBookCovers(allBooks);
            } catch (error) {
                // Don't fail the build if cover download fails
                console.warn('Error downloading book covers:', error);
            }
        }

        return shelvesWithBooks;
    } catch (error) {
        // During build time, return empty array instead of throwing to prevent build failures
        console.error('Error fetching shelves:', error);
        console.warn('Returning empty shelves array to allow build to continue');
        return [];
    }
}

export default async function ReadingPage() {
    const shelves = await getShelves();

    return (
        <PageContainer wide>
            <div className="space-y-12 mb-12">
                <div className="space-y-4" data-testid="reading-intro">
                    <PageHeader title="Reading">
                        My book collection and reading lists from{' '}
                        <a
                            href="https://literal.club"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-emerald-500 hover:text-emerald-600 font-medium underline">
                            literal.club
                        </a>
                        .
                    </PageHeader>
                </div>

                <div className="space-y-16">
                    {shelves.length > 0 ? (
                        shelves.map((shelf) => <ShelfComponent key={shelf.id} shelf={shelf} />)
                    ) : (
                        <p className="text-gray-500">No shelves found.</p>
                    )}
                </div>
            </div>
        </PageContainer>
    );
}
