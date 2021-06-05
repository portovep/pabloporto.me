import Image from 'next/image';

type StackItemProps = {
    name: string;
    description: string;
    link: string;
};

export default function StackItem(props: StackItemProps): JSX.Element {
    const { name, description, link } = props;
    return (
        <li className="hover:bg-white hover:shadow-lg hover:border-emerald-400 mt-6 transition-colors duration-150 bg-white border-2 border-gray-200 rounded-lg">
            <a className="flex px-4 py-4 rounded" href={link}>
                <Image
                    className="rounded-xl border border-gray-100"
                    src={`/images/stack/${name
                        .toLowerCase()
                        .replace('.', '')
                        .replace(' ', '')}.svg`}
                    alt={`${name} Logo`}
                    width="60"
                    height="90"
                />
                <div className=" justify-center pl-5 space-y-2">
                    <div className=" space-y-1">
                        <p className="text-primary mt-2 font-medium">{name}</p>
                        <p className="text-tertiary max-w-2xl text-base font-normal leading-snug">
                            {description}
                        </p>
                    </div>
                </div>
            </a>
        </li>
    );
}
