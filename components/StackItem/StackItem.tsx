import Image from 'next/image';

type StackItemProps = {
    name: string;
    description: string;
    link: string;
};

export default function StackItem(props: StackItemProps): JSX.Element {
    const { name, description, link } = props;
    return (
        <li className="mt-6 border-2 border-gray-200 bg-white rounded-lg hover:bg-white hover:shadow-lg hover:border-indigo-400 transition-colors duration-150">
            <a className="flex py-4 px-4 rounded" href={link}>
                <Image
                    className="border border-gray-100 rounded-xl"
                    src={`/images/stack/${name
                        .toLowerCase()
                        .replace('.', '')
                        .replace(' ', '')}.svg`}
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
