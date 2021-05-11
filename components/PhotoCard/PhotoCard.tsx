import Image from 'next/image';

type PhotoCardProps = {
    imageURL: string;
    location: string;
    title: string;
};

export default function PhotoCard({ imageURL, location, title }: PhotoCardProps): JSX.Element {
    return (
        <div className="overflow-hidden shadow-lg rounded-lg h-100 w-100 md:h-90 md:w-80 cursor-pointer m-auto">
            <div className="h-96 w-96 relative">
                <Image
                    alt={`${title} taken at ${location}`}
                    src={imageURL}
                    className=""
                    layout="fill"
                    objectFit="cover"
                />
            </div>
        </div>
    );
}