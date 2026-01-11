import { talks, type TalkData } from '../content/talks';

export type { TalkData };

/**
 * Get all talks sorted by year (newest first)
 */
export async function getSortedTalks(): Promise<TalkData[]> {
    return [...talks].sort((a, b) => b.year - a.year);
}
