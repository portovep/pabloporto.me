module.exports = {
    ci: {
        assert: {
            assertions: {
                'categories:performance': ['error', { minScore: 0.9 }],
                'categories:accessibility': ['warn', { minScore: 1 }],
                'categories:best-practices': ['warn', { minScore: 1 }],
                'categories:seo': ['warn', { minScore: 1 }]
            }
        }
    }
};
