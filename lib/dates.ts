import { parseISO, format } from 'date-fns';

// Post frontmatter dates vary in precision (YYYY, YYYY-MM, YYYY-MM-DD).
// Normalize to a full ISO date so Open Graph `article:published_time` and
// JSON-LD `datePublished` emit complete, validator-friendly values.
export function toIsoDate(dateString: string): string {
    return format(parseISO(dateString), 'yyyy-MM-dd');
}
