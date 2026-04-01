import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    images: {
        qualities: [75, 80, 100]
    },
    turbopack: {
        rules: {
            '*.svg': {
                loaders: [
                    {
                        loader: '@svgr/webpack',
                        options: {
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
                ],
                as: '*.js'
            }
        }
    },
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
    }
};

export default nextConfig;
