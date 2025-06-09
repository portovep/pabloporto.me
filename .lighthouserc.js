module.exports = {
    ci: {
        assert: {
            assertions: {
                'categories:performance': ['error', { minScore: 0.6 }],
                'categories:accessibility': ['error', { minScore: 0.9 }],
                'categories:best-practices': ['error', { minScore: 0.9 }],
                'categories:seo': ['error', { minScore: 0.66 }],
            }
        },
        upload: {
            target: 'temporary-public-storage'
        }
    }
};
