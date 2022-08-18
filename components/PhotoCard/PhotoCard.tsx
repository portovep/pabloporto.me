import Image, { StaticImageData } from 'next/image';

type PhotoCardProps = {
    imageURL: StaticImageData;
    location: string;
    title: string;
};

export default function PhotoCard({ imageURL, location, title }: PhotoCardProps): JSX.Element {
    return (
        <div className="md:h-90 md:w-80 m-auto overflow-hidden rounded-lg shadow-lg cursor-pointer">
            <div className="h-96 w-72 sm:h-96 sm:w-96 relative">
                <Image
                    alt={`${title} taken at ${location}`}
                    src={imageURL}
                    layout="fill"
                    placeholder="blur"
                    objectFit="cover"
                />
            </div>
        </div>
    );
}
