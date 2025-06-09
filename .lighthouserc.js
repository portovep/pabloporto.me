module.exports = {
    ci: {
        assert: {
            assertions: {
                'categories:performance': ['error', { minScore: 0.8 }],
                'categories:accessibility': ['error', { minScore: 0.9 }],
                'categories:best-practices': ['error', { minScore: 0.9 }],
                'categories:seo': ['error', { minScore: 0.9 }],
                'robots-txt': ['off']
            }
        },
        upload: {
            target: 'temporary-public-storage'
        }
    }
};
