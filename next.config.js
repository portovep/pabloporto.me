module.exports = {
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/i,
            issuer: /\.[jt]sx?$/,
            use: ['@svgr/webpack']
        });

        return config;
    },
    eslint: {
        dirs: ['pages', 'components', 'lib', 'cypress']
    }
};
