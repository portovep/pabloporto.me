import Link from 'next/link';

type CardProps = {
    title: string;
    description: string;
    linkURL?: string;
};

export default function Card({ title, description, linkURL }: CardProps): React.ReactElement {
    return (
        <div
            className="lg:group md:w-5/12 lg:hover:bg-card lg:hover:shadow-lg lg:hover:border-emerald-400 p-6 m-2 min-h-44 text-left transition-colors duration-150 bg-card border-2 border-border rounded-lg flex flex-col"
            data-testid={`home-card-${title.toLowerCase()}`}>
            <Link
                href={linkURL || '/404'}
                rel="noopener noreferrer"
                className="flex flex-col flex-1 min-h-0">
                <h3 className="lg:group-hover:text-emerald-600 mb-4 text-2xl font-semibold">
                    {title}
                    <span aria-hidden="true" className="align-text ml-1">
                        →
                    </span>
                </h3>
                <p className="m-0 text-xl leading-7">{description}</p>
            </Link>
        </div>
    );
}
