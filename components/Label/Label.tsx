type LabelProps = {
    text: string;
};

export default function Label({ text }: LabelProps): JSX.Element {
    return (
        <span className="px-2 py-1 cursor-default bg-indigo-500 text-indigo-60 text-gray-100 font-semibold sm:text-base text-sm inline-block align-top rounded-l hover:bg-indigo-500">
            {text}
        </span>
    );
}
