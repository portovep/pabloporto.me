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
        { id: 'HR', title: 'Croatia' }
    ],
    visited: [
        { id: 'IE', title: 'Ireland' },
        { id: 'GB', title: 'United Kingdom' },
        { id: 'PT', title: 'Portugal' },
        { id: 'DE', title: 'Germany' },
        { id: 'FR', title: 'France' },
        { id: 'IS', title: 'Iceland' },
        { id: 'PL', title: 'Poland' },
        { id: 'DK', title: 'Denmark' },
        { id: 'AT', title: 'Austria' },
        { id: 'AD', title: 'Andorra' },
        { id: 'HU', title: 'Hungary' },
        { id: 'AE', title: 'United Arab Emirates' },
        { id: 'LK', title: 'Sri Lanka' },
        { id: 'IN', title: 'India' },
        { id: 'TH', title: 'Thailand' },
        { id: 'NL', title: 'Netherlands' },
        { id: 'MA', title: 'Morocco' },
        { id: 'IT', title: 'Italy' },
        { id: 'US', title: 'United States' },
        { id: 'MV', title: 'Maldives' },
        { id: 'GR', title: 'Greece' },
        { id: 'CR', title: 'Costa Rica' },
        { id: 'SV', title: 'El Salvador' },
        { id: 'CH', title: 'Switzerland' },
        { id: 'CZ', title: 'Czech Republic' },
        { id: 'AL', title: 'Albania' },
        { id: 'HR', title: 'Croatia' },
        { id: 'BA', title: 'Bosnia' },
        { id: 'ME', title: 'Montenegro' },
        { id: 'RO', title: 'Romania' },
        { id: 'HR', title: 'Croatia' },
        { id: 'CY', title: 'Cyprus' },
        { id: 'GE', title: 'Georgia' }
    ],
    continents: [
        { id: 'EU', title: 'Europe' },
        { id: 'ASIA', title: 'Asia' },
        { id: 'AFRICA', title: 'Africa' },
        { id: 'NA', title: 'North America' }
    ]
};
