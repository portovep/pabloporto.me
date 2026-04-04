import type { NextConfig } from 'next';
import createMDX from '@next/mdx';

const nextConfig: NextConfig = {
    pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
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

const withMDX = createMDX({
    options: {
        // Must use string references — Turbopack cannot pass JS functions to Rust
        remarkPlugins: ['remark-frontmatter', 'remark-gfm'],
        rehypePlugins: []
    }
});

export default withMDX(nextConfig);
