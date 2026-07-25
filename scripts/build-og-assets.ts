// Prepares the binary assets the Open Graph card renderer reads at build time.
//
// Satori (behind `next/og`) cannot decode webp, so the profile photo has to be
// re-encoded as JPEG and downscaled — the card never renders it larger than
// 232px, so 464px covers a 2x render with room to spare.
//
// Run with `npm run og:assets` after replacing public/images/profile.webp.

import sharp from 'sharp';
import { mkdir } from 'node:fs/promises';
import { join } from 'node:path';

const SOURCE = join(process.cwd(), 'public', 'images', 'profile.webp');
const OUT_DIR = join(process.cwd(), 'assets', 'og');
const SIZE = 464;

async function main(): Promise<void> {
    await mkdir(OUT_DIR, { recursive: true });

    const info = await sharp(SOURCE)
        .resize(SIZE, SIZE, { fit: 'cover', position: 'centre' })
        .jpeg({ quality: 88, mozjpeg: true })
        .toFile(join(OUT_DIR, 'profile.jpg'));

    console.log(`assets/og/profile.jpg — ${info.width}x${info.height}, ${info.size} bytes`);
}

main().catch((error: unknown) => {
    console.error(error);
    process.exit(1);
});
