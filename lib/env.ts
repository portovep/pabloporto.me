export const env = {
    LITERAL_API_TOKEN: process.env.LITERAL_API_TOKEN,
    LITERAL_PROFILE_ID: process.env.LITERAL_PROFILE_ID,
    LITERAL_PROFILE_HANDLE: process.env.LITERAL_PROFILE_HANDLE,
    // Minimalist year-grouped blog index is on by default; set to "false" for the old card layout.
    FEATURE_BLOG_MINIMAL_LIST: process.env.FEATURE_BLOG_MINIMAL_LIST !== 'false',
    VERCEL_ENV: process.env.VERCEL_ENV,
    VERCEL_URL: process.env.VERCEL_URL
} as const;
