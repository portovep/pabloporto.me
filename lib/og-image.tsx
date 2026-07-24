import { ImageResponse } from 'next/og';

// Shared configuration and renderer for the generated Open Graph / Twitter card
// images. Keeping it in one place means the site card and the per-post cards stay
// visually consistent and the file-convention routes stay tiny.

export const OG_SIZE = { width: 1200, height: 630 };
export const OG_CONTENT_TYPE = 'image/png';

interface OgImageOptions {
    title: string;
    subtitle?: string;
    eyebrow?: string;
}

export function renderOgImage({ title, subtitle, eyebrow = 'pabloporto.me' }: OgImageOptions) {
    return new ImageResponse(
        <div
            style={{
                height: '100%',
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '80px',
                background: 'linear-gradient(135deg, #0b0f0d 0%, #171717 55%, #0b0f0d 100%)',
                color: '#fafafa'
            }}>
            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    fontSize: 26,
                    letterSpacing: '0.18em',
                    textTransform: 'uppercase',
                    color: '#10b981'
                }}>
                {eyebrow}
            </div>

            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div
                    style={{
                        display: 'flex',
                        fontSize: title.length > 55 ? 60 : 74,
                        lineHeight: 1.1,
                        fontWeight: 700,
                        letterSpacing: '-0.02em'
                    }}>
                    {title}
                </div>
                {subtitle && (
                    <div
                        style={{
                            display: 'flex',
                            marginTop: 28,
                            fontSize: 32,
                            lineHeight: 1.35,
                            color: '#a3a3a3'
                        }}>
                        {subtitle}
                    </div>
                )}
            </div>

            <div style={{ display: 'flex', alignItems: 'center' }}>
                <div style={{ display: 'flex', width: 64, height: 6, background: '#10b981' }} />
                <div style={{ display: 'flex', marginLeft: 20, fontSize: 28, color: '#e5e5e5' }}>
                    Pablo Porto
                </div>
            </div>
        </div>,
        {
            ...OG_SIZE,
            headers: {
                'Cache-Control':
                    'public, max-age=3600, s-maxage=86400, stale-while-revalidate=604800'
            }
        }
    );
}
