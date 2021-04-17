type LabelProps = {
    text: string;
};

export default function Label({ text }: LabelProps): JSX.Element {
    return (
        <span className="px-2 py-1 cursor-default bg-indigo-600 text-indigo-60 text-gray-100 font-semibold text-base inline-block align-top rounded hover:bg-indigo-500">
            {text}
        </span>
    );
}
