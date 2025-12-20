const LITERAL_API_URL = 'https://literal.club/graphql/';

// TypeScript types based on Literal API fragments
export type ReadingStatus = 'WANTS_TO_READ' | 'IS_READING' | 'FINISHED' | 'DROPPED' | 'NONE';

export type Author = {
    id: string;
    name: string;
};

export type Book = {
    id: string;
    slug: string;
    title: string;
    subtitle?: string;
    description?: string;
    isbn10?: string;
    isbn13?: string;
    language?: string;
    pageCount?: number;
    publishedDate?: string;
    publisher?: string;
    cover?: string;
    authors: Author[];
    gradientColors?: string[];
};

export type Profile = {
    id: string;
    handle: string;
    name?: string;
    bio?: string;
    image?: string;
    invitedByProfileId?: string;
};

export type Shelf = {
    id: string;
    slug: string;
    title: string;
    description?: string;
    profileId: string;
    books?: Book[];
    owner?: Profile;
};

export type ReadingState = {
    id: string;
    status: ReadingStatus;
    bookId: string;
    profileId: string;
    createdAt: string;
    book?: Book;
};

// GraphQL fragments
const BOOK_PARTS = `
    fragment BookParts on Book {
        id
        slug
        title
        subtitle
        description
        isbn10
        isbn13
        language
        pageCount
        publishedDate
        publisher
        cover
        authors {
            id
            name
        }
        gradientColors
    }
`;

const SHELF_PARTS = `
    fragment ShelfParts on Shelf {
        id
        slug
        title
        description
        profileId
    }
`;

const PROFILE_PARTS = `
    fragment ProfileParts on Profile {
        id
        handle
        name
        bio
        image
        invitedByProfileId
    }
`;

// GraphQL queries and mutations
const GET_SHELVES_BY_PROFILE_ID = `
    ${SHELF_PARTS}
    ${BOOK_PARTS}
    query getShelvesByProfileId($profileId: String!, $limit: Int!, $offset: Int!) {
        getShelvesByProfileId(profileId: $profileId, limit: $limit, offset: $offset) {
            ...ShelfParts
            books(take: 100) {
                ...BookParts
            }
        }
    }
`;

const GET_PROFILE_BY_HANDLE = `
    ${PROFILE_PARTS}
    query getProfileParts($handle: String!) {
        profile(where: { handle: $handle }) {
            ...ProfileParts
        }
    }
`;

// GraphQL request helper
async function graphqlRequest<T>(
    query: string,
    variables?: Record<string, unknown>,
    token?: string
): Promise<T> {
    const headers: HeadersInit = {
        'Content-Type': 'application/json'
    };

    if (token) {
        headers['Authorization'] = `Bearer ${token}`;
    }

    const response = await fetch(LITERAL_API_URL, {
        method: 'POST',
        headers,
        body: JSON.stringify({
            query,
            variables
        })
    });

    if (!response.ok) {
        const errorText = await response.text();
        throw new Error(
            `GraphQL request failed: ${response.status} ${response.statusText}. Response: ${errorText}`
        );
    }

    const result = await response.json();

    if (result.errors) {
        const errorMessages = result.errors.map((e: { message: string }) => e.message).join(', ');
        throw new Error(`GraphQL errors: ${errorMessages}`);
    }

    return result.data;
}

/**
 * Get profile information by handle
 */
export async function getProfileByHandle(handle: string): Promise<Profile | null> {
    try {
        const data = await graphqlRequest<{ profile: Profile | null }>(GET_PROFILE_BY_HANDLE, {
            handle
        });
        return data.profile;
    } catch (error) {
        console.error('Error fetching profile by handle:', error);
        throw error;
    }
}

/**
 * Get all shelves for a profile
 */
export async function getShelvesByProfileId(
    profileId: string,
    limit: number = 100,
    offset: number = 0,
    token?: string
): Promise<Shelf[]> {
    try {
        const data = await graphqlRequest<{ getShelvesByProfileId: Shelf[] | null }>(
            GET_SHELVES_BY_PROFILE_ID,
            { profileId, limit, offset },
            token
        );

        // Handle case where API returns null
        if (!data.getShelvesByProfileId) {
            console.warn('getShelvesByProfileId returned null for profileId:', profileId);
            return [];
        }

        return data.getShelvesByProfileId;
    } catch (error) {
        console.error('Error fetching shelves by profile ID:', error);
        console.error('Profile ID:', profileId);
        console.error('Has token:', !!token);
        throw error;
    }
}

/**
 * Get profile ID from handle (helper function)
 */
export async function getProfileIdFromHandle(handle: string): Promise<string | null> {
    const profile = await getProfileByHandle(handle);
    return profile?.id || null;
}
