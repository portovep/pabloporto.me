import Link from 'next/link';

type CardProps = {
    title: string;
    description: string;
    linkURL?: string;
};

export default function Card({ title, description, linkURL }: CardProps) {
    return (
        <Link
            href={linkURL || '/404'}
            rel="noopener noreferrer"
            className="group md:w-5/12 hover:bg-card hover:shadow-lg hover:border-emerald-400 p-6 m-2 min-h-44 text-left transition-colors duration-150 bg-card border-2 border-border rounded-lg flex flex-col cursor-pointer"
            data-testid={`home-card-${title.toLowerCase()}`}>
            <h3 className="group-hover:text-emerald-600 mb-4 text-2xl font-semibold">
                {title}
                <span aria-hidden="true" className="align-text ml-1">
                    →
                </span>
            </h3>
            <p className="m-0 text-base leading-relaxed">{description}</p>
        </Link>
    );
}
