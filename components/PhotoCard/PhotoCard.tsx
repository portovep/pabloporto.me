import Image, { StaticImageData } from 'next/image';

type PhotoCardProps = {
    imageURL: StaticImageData;
    location: string;
    title: string;
};

export default function PhotoCard({ imageURL, location, title }: PhotoCardProps): JSX.Element {
    return (
        <div
            data-testid="photo-card"
            className="md:h-90 md:w-80 rounded-xl shadow-gray-500 m-auto overflow-hidden shadow-xl cursor-pointer">
            <div className="h-96 w-72 sm:h-96 sm:w-96 relative">
                <Image
                    alt={`${title} taken at ${location}`}
                    src={imageURL}
                    placeholder="blur"
                    className="object-cover"
                    quality={100}
                    fill
                    sizes="(max-width: 768px) 100vw,
                        (max-width: 1200px) 50vw,
                        33vw"
                />
            </div>
        </div>
    );
}
