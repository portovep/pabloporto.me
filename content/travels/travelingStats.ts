export type TravelingStats = {
    lived: { id: string; title: string }[];
    visited: { id: string; title: string }[];
    continents: { id: string; title: string }[];
};

export const travelingStats: TravelingStats = {
    lived: [
        { id: 'ES', title: 'Spain' },
        { id: 'IE', title: 'Ireland' },
        { id: 'GB', title: 'United Kingdom' },
        { id: 'DE', title: 'Germany' },
        { id: 'IN', title: 'India' },
        { id: 'GR', title: 'Greece' },
        { id: 'AL', title: 'Albania' },
        { id: 'HR', title: 'Croatia' },
        { id: 'IT', title: 'Italy' }
    ],
    visited: [
        { id: 'AD', title: 'Andorra' },
        { id: 'AE', title: 'United Arab Emirates' },
        { id: 'AL', title: 'Albania' },
        { id: 'AM', title: 'Armenia' },
        { id: 'AT', title: 'Austria' },
        { id: 'BA', title: 'Bosnia and Herzegovina' },
        { id: 'CH', title: 'Switzerland' },
        { id: 'CR', title: 'Costa Rica' },
        { id: 'CY', title: 'Cyprus' },
        { id: 'CZ', title: 'Czech Republic' },
        { id: 'DE', title: 'Germany' },
        { id: 'DK', title: 'Denmark' },
        { id: 'ES', title: 'Spain' },
        { id: 'FR', title: 'France' },
        { id: 'GB', title: 'United Kingdom' },
        { id: 'GE', title: 'Georgia' },
        { id: 'GR', title: 'Greece' },
        { id: 'HR', title: 'Croatia' },
        { id: 'HU', title: 'Hungary' },
        { id: 'IE', title: 'Ireland' },
        { id: 'IN', title: 'India' },
        { id: 'IS', title: 'Iceland' },
        { id: 'IT', title: 'Italy' },
        { id: 'LA', title: 'Laos' },
        { id: 'LK', title: 'Sri Lanka' },
        { id: 'MA', title: 'Morocco' },
        { id: 'ME', title: 'Montenegro' },
        { id: 'MV', title: 'Maldives' },
        { id: 'MY', title: 'Malaysia' },
        { id: 'NL', title: 'Netherlands' },
        { id: 'PL', title: 'Poland' },
        { id: 'PT', title: 'Portugal' },
        { id: 'RO', title: 'Romania' },
        { id: 'SG', title: 'Singapore' },
        { id: 'SK', title: 'Slovakia' },
        { id: 'SV', title: 'El Salvador' },
        { id: 'TH', title: 'Thailand' },
        { id: 'TR', title: 'Turkey' },
        { id: 'US', title: 'United States' },
        { id: 'VA', title: 'Vatican City' },
        { id: 'VN', title: 'Vietnam' }
    ],
    continents: [
        { id: 'EU', title: 'Europe' },
        { id: 'ASIA', title: 'Asia' },
        { id: 'AFRICA', title: 'Africa' },
        { id: 'NA', title: 'North America' }
    ]
};

/** Unique count of countries visited (union of visited and lived by id). */
export const uniqueVisitedCount = new Set([
    ...travelingStats.visited.map((c) => c.id),
    ...travelingStats.lived.map((c) => c.id)
]).size;
