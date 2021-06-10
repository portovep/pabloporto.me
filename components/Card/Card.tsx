import Link from 'next/link';

type CardProps = {
    title: string;
    description: string;
    linkURL?: string;
};

export default function Card({ title, description, linkURL }: CardProps): JSX.Element {
    return (
        <div className="lg:group md:w-5/12 lg:hover:bg-white lg:hover:shadow-lg lg:hover:border-emerald-400 p-6 m-2 text-left transition-colors duration-150 bg-white border-2 border-gray-200 rounded-lg">
            <Link href={linkURL || '/404'}>
                <a rel="noopener noreferrer">
                    <h3 className="lg:group-hover:text-emerald-600 mb-4 text-2xl font-semibold">
                        {title}
                        <span aria-hidden="true" className="align-text ml-1">
                            →
                        </span>
                    </h3>
                    <p className="m-0 text-xl leading-7">{description}</p>
                </a>
            </Link>
        </div>
    );
}
