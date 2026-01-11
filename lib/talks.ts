import { talks, type TalkData } from '../content/talks';

export type { TalkData };

/**
 * Get all talks sorted by year (newest first)
 */
export async function getSortedTalks(): Promise<TalkData[]> {
    return [...talks].sort((a, b) => {
        if (a.year < b.year) {
            return 1;
        } else if (a.year > b.year) {
            return -1;
        }
        return 0;
    });
}

/**
 * Get all talks
 */
export async function getAllTalks(): Promise<TalkData[]> {
    return talks;
}

/**
 * Get a talk by ID
 */
export async function getTalkById(id: string): Promise<TalkData | undefined> {
    return talks.find((talk) => talk.id === id);
}
