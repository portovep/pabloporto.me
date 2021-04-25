import Image from 'next/image';

type StackItemProps = {
    name: string;
    description: string;
    link: string;
};

export default function StackItem(props: StackItemProps): JSX.Element {
    const { name, description, link } = props;
    return (
        <li>
            <a
                className="flex py-4 px-2 bg-gray-800 bg-opacity-0 rounded  hover:bg-opacity-5"
                href={link}>
                <Image
                    className="border border-gray-100 rounded-xl"
                    src={`/images/stack/${name.toLowerCase().replace('.', '')}.svg`}
                    alt={`${name} Logo`}
                    width="60"
                    height="90"
                />
                <div className="justify-center pl-5 space-y-2 ">
                    <div className="space-y-1 ">
                        <p className="mt-2 font-medium text-primary">{name}</p>
                        <p className="text-base font-normal leading-snug text-tertiary max-w-2xl">
                            {description}
                        </p>
                    </div>
                </div>
            </a>
        </li>
    );
}
