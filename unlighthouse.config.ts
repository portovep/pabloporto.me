const config = {
    site: 'http://localhost:3000',
    scanner: {
        // Site is small enough to audit every page rather than sampling similar routes.
        dynamicSampling: false
    },
    ci: {
        budget: {
            performance: 60,
            accessibility: 90,
            'best-practices': 90,
            seo: 66
        }
    }
};

export default config;
