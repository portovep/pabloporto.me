import Link from 'next/link';

type CardProps = {
    title: string;
    description: string;
    linkURL?: string;
};

export default function Card({ title, description, linkURL }: CardProps): JSX.Element {
    return (
        <div className="group m-2 p-6 text-left border-2 border-gray-200 bg-white rounded-lg md:w-5/12 hover:bg-white hover:shadow-lg hover:border-indigo-400 transition-colors duration-150">
            <Link href={linkURL || '/404'}>
                <a rel="noopener noreferrer">
                    <h3 className="mb-4 text-2xl font-semibold group-hover:text-indigo-600">
                        {title}
                        <span aria-hidden="true" className="ml-1 align-text">
                            →
                        </span>
                    </h3>
                    <p className="m-0 text-xl leading-7">{description}</p>
                </a>
            </Link>
        </div>
    );
}
