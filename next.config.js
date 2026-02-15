module.exports = {
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/i,
            issuer: /\.[jt]sx?$/,
            use: [
                {
                    loader: '@svgr/webpack',
                    options: {
                        // Preserve path id attributes (e.g. id="AD") so WorldMap can apply
                        // visited/lived/land classes. No prefixIds so ids stay as country codes.
                        svgoConfig: {
                            plugins: [
                                {
                                    name: 'preset-default',
                                    params: { overrides: { cleanupIds: false } }
                                }
                            ]
                        }
                    }
                }
            ]
        });

        return config;
    },
    eslint: {
        dirs: ['pages', 'components', 'lib', 'cypress']
    }
};
