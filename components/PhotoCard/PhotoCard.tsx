type PhotoCardProps = {
    imageURL: string;
    location: string;
    title: string;
};

export default function PhotoCard({ imageURL, location, title }: PhotoCardProps): JSX.Element {
    return (
        <div className="overflow-hidden shadow-lg rounded-lg h-100 w-100 md:h-90 md:w-80 cursor-pointer m-auto">
            <a href="/#" className="w-full block h-full">
                <img
                    alt={`${title} taken at ${location}`}
                    src={imageURL}
                    className="max-h-500 w-full object-cover"
                />
            </a>
        </div>
    );
}
