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
            className="no-scrollbar not-prose my-14 -mx-6 flex snap-x snap-mandatory gap-3 overflow-x-auto overscroll-x-contain scroll-px-6 px-6 sm:mx-0 sm:grid sm:snap-none sm:grid-cols-3 sm:gap-4 sm:overflow-visible sm:px-0 lg:-mx-12 xl:-mx-24"
            data-testid="photo-strip"
            role="group"
            aria-label="Photos"
            tabIndex={0}>
            {photos.map((photo) => (
                <div
                    key={photo.src.src}
                    className="relative aspect-[2/3] w-[72%] shrink-0 snap-start overflow-hidden rounded sm:w-auto">
                    <Image
                        src={photo.src}
                        alt={photo.alt}
                        fill
                        placeholder="blur"
                        quality={80}
                        className="object-cover"
                        sizes="(max-width: 640px) 72vw, 320px"
                    />
                </div>
            ))}
        </div>
    );
}
