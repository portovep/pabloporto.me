import { ImageResponse } from 'next/og';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

// Shared renderers for the Open Graph / Twitter card images. Two layouts:
//
//   page — profile photo, name and domain. The generic site-wide card. Rendered
//          once by `npm run og:card` into public/images/og-card.png, which
//          lib/metadata.ts points every non-post page at. It can't come from a
//          root opengraph-image.tsx: Next replaces `openGraph` wholesale rather
//          than merging it, so any page setting its own would drop the image.
//   post — eyebrow, title and summary. Blog posts only, via the opengraph-image
//          file colocated with the post route, prerendered at build time.

export const OG_SIZE = { width: 1200, height: 630 };
export const OG_CONTENT_TYPE = 'image/png';

// Brand tokens mirrored from styles/globals.css. They have to be literals here:
// the card is rasterised outside the browser, so CSS variables aren't resolvable.
const BG = '#ffffff'; // --background
const INK = '#252525'; // --foreground
const MUTED = '#747474'; // --muted-foreground
const BORDER = '#e6e6e6'; // --border
const ACCENT = '#059669'; // emerald-600

const HEADING = { fontFamily: 'Cal Sans' };

const ASSET_DIR = join(process.cwd(), 'assets', 'og');

type OgFonts = NonNullable<ConstructorParameters<typeof ImageResponse>[1]>['fonts'];

interface OgAssets {
    photo: string;
    fonts: OgFonts;
}

// Every card in a build reads the same four fonts and one photo, so hold onto
// the parsed result rather than re-reading it once per post.
let assetsPromise: Promise<OgAssets> | undefined;

function loadAssets(): Promise<OgAssets> {
    assetsPromise ??= (async () => {
        const [regular, medium, bold, calSans, photo] = await Promise.all([
            readFile(join(ASSET_DIR, 'inter-latin-400-normal.woff')),
            readFile(join(ASSET_DIR, 'inter-latin-500-normal.woff')),
            readFile(join(ASSET_DIR, 'inter-latin-700-normal.woff')),
            readFile(join(ASSET_DIR, 'cal-sans-latin-400-normal.woff')),
            readFile(join(ASSET_DIR, 'profile.jpg'))
        ]);

        return {
            photo: `data:image/jpeg;base64,${photo.toString('base64')}`,
            fonts: [
                { name: 'Inter', data: regular, weight: 400, style: 'normal' },
                { name: 'Inter', data: medium, weight: 500, style: 'normal' },
                { name: 'Inter', data: bold, weight: 700, style: 'normal' },
                // Cal Sans ships a single weight — registering it as anything
                // other than 400 would make Satori synthesise a match instead.
                { name: 'Cal Sans', data: calSans, weight: 400, style: 'normal' }
            ]
        };
    })();

    return assetsPromise;
}

const RESPONSE_OPTIONS = {
    ...OG_SIZE,
    headers: {
        'Cache-Control': 'public, max-age=3600, s-maxage=86400, stale-while-revalidate=604800'
    }
};

const NAME = 'Pablo Porto';
const DOMAIN = 'pabloporto.me';

function Avatar({ src, size, ring }: { src: string; size: number; ring: string }) {
    return (
        <div
            style={{
                display: 'flex',
                width: size,
                height: size,
                borderRadius: 9999,
                overflow: 'hidden',
                boxShadow: ring
            }}>
            {/* eslint-disable-next-line @next/next/no-img-element -- Satori rasterises raw img tags, next/image has no meaning here */}
            <img src={src} width="100%" height="100%" style={{ objectFit: 'cover' }} alt="" />
        </div>
    );
}

// The site-wide card. Deliberately generic: it carries identity, not page content.
export async function renderPageCard(): Promise<ImageResponse> {
    const { photo, fonts } = await loadAssets();

    return new ImageResponse(
        <div
            style={{
                height: '100%',
                width: '100%',
                background: BG,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                fontFamily: 'Inter',
                position: 'relative'
            }}>
            <div
                style={{
                    position: 'absolute',
                    top: 56,
                    left: 0,
                    right: 0,
                    display: 'flex',
                    justifyContent: 'center'
                }}>
                <div style={{ display: 'flex', width: 64, height: 5, background: ACCENT }} />
            </div>

            <Avatar src={photo} size={232} ring={`0 0 0 5px ${BG}, 0 0 0 7px ${ACCENT}3d`} />

            <div
                style={{
                    display: 'flex',
                    marginTop: 28,
                    fontSize: 44,
                    letterSpacing: '-0.015em',
                    color: INK,
                    ...HEADING
                }}>
                {NAME}
            </div>
            <div
                style={{
                    display: 'flex',
                    marginTop: 10,
                    fontSize: 23,
                    fontWeight: 500,
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    color: MUTED
                }}>
                {DOMAIN}
            </div>
        </div>,
        { ...RESPONSE_OPTIONS, fonts }
    );
}

interface PostCardOptions {
    title: string;
    subtitle?: string;
    eyebrow?: string;
}

// Satori gives no way to measure text, so the card can't reflow to fit. These
// two guards keep the worst real titles and descriptions (94 and 149 characters)
// clear of the footer rule instead.
function titleSize(length: number): number {
    if (length > 60) return 58;
    if (length > 42) return 66;
    return 74;
}

const SUBTITLE_MAX = 120;

function clampSubtitle(subtitle: string): string {
    if (subtitle.length <= SUBTITLE_MAX) return subtitle;

    const cut = subtitle.slice(0, SUBTITLE_MAX);
    const lastSpace = cut.lastIndexOf(' ');

    return `${(lastSpace > 0 ? cut.slice(0, lastSpace) : cut).replace(/[,.;:]$/, '')}…`;
}

export async function renderPostCard({
    title,
    subtitle,
    eyebrow = 'Writing'
}: PostCardOptions): Promise<ImageResponse> {
    const { photo, fonts } = await loadAssets();

    return new ImageResponse(
        <div
            style={{
                height: '100%',
                width: '100%',
                background: BG,
                display: 'flex',
                flexDirection: 'column',
                fontFamily: 'Inter',
                padding: '72px 80px'
            }}>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start'
                }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <div
                        style={{
                            display: 'flex',
                            width: 56,
                            height: 5,
                            background: ACCENT,
                            marginRight: 13
                        }}
                    />
                    <div
                        style={{
                            display: 'flex',
                            fontSize: 24,
                            fontWeight: 700,
                            letterSpacing: '0.16em',
                            textTransform: 'uppercase',
                            color: ACCENT
                        }}>
                        {eyebrow}
                    </div>
                </div>
                <Avatar src={photo} size={112} ring={`0 0 0 4px ${ACCENT}38`} />
            </div>

            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    flex: 1,
                    justifyContent: 'center',
                    paddingBottom: 16,
                    maxWidth: 940
                }}>
                <div
                    style={{
                        display: 'flex',
                        fontSize: titleSize(title.length),
                        lineHeight: 1.05,
                        letterSpacing: '-0.02em',
                        color: INK,
                        ...HEADING
                    }}>
                    {title}
                </div>
                {subtitle && (
                    <div
                        style={{
                            display: 'flex',
                            marginTop: 26,
                            fontSize: 30,
                            lineHeight: 1.4,
                            color: MUTED
                        }}>
                        {clampSubtitle(subtitle)}
                    </div>
                )}
            </div>

            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    paddingTop: 26,
                    borderTop: `1px solid ${BORDER}`
                }}>
                <div
                    style={{
                        display: 'flex',
                        width: 9,
                        height: 9,
                        borderRadius: 9999,
                        background: ACCENT,
                        marginRight: 14
                    }}
                />
                <div style={{ display: 'flex', fontSize: 25, fontWeight: 700, color: INK }}>
                    {NAME}
                </div>
            </div>
        </div>,
        { ...RESPONSE_OPTIONS, fonts }
    );
}
