module.exports = {
    ci: {
        assert: {
            assertions: {
                'categories:performance': ['error', { minScore: 0.8 }],
                'categories:accessibility': ['error', { minScore: 0.9 }],
                'categories:best-practices': ['error', { minScore: 0.9 }],
                'categories:seo': ['error', { minScore: 0.9 }],
                'is-crawlable': 'off'
            }
        },
        upload: {
            target: 'temporary-public-storage'
        }
    }
};
