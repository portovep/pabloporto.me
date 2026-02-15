import React from 'react';
import Image, { StaticImageData } from 'next/image';

interface PhotoCardProps {
    imageURL: StaticImageData;
    location: string;
    title: string;
    /** Set true for the first above-the-fold image to improve LCP (avoids lazy-load). */
    priority?: boolean;
}

export default function PhotoCard({
    imageURL,
    location,
    title,
    priority = false
}: PhotoCardProps): React.ReactElement {
    return (
        <div
            data-testid="photo-card"
            className="h-96 w-72 rounded-xl shadow-gray-500 m-auto overflow-hidden shadow-xl cursor-pointer">
            <div className="h-96 w-72 relative">
                <Image
                    alt={`${title} taken at ${location}`}
                    src={imageURL}
                    placeholder="blur"
                    className="object-cover"
                    quality={priority ? 100 : 80}
                    fill
                    sizes="(max-width: 768px) 90vw, (max-width: 1200px) 45vw, 33vw"
                    priority={priority}
                />
            </div>
        </div>
    );
}
