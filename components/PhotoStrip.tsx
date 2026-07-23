import Image, { StaticImageData } from 'next/image';

interface StripPhoto {
    src: StaticImageData;
    alt: string;
}

interface PhotoStripProps {
    photos: StripPhoto[];
}

export default function PhotoStrip({ photos }: PhotoStripProps) {
    return (
        <div
            className="not-prose my-14 grid grid-cols-3 gap-3 sm:gap-4 lg:-mx-12 xl:-mx-24"
            data-testid="photo-strip">
            {photos.map((photo) => (
                <div key={photo.src.src} className="relative aspect-[2/3] overflow-hidden rounded">
                    <Image
                        src={photo.src}
                        alt={photo.alt}
                        fill
                        placeholder="blur"
                        quality={80}
                        className="object-cover"
                        sizes="(max-width: 768px) 32vw, 320px"
                    />
                </div>
            ))}
        </div>
    );
}
