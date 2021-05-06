type LabelProps = {
    text: string;
};

export default function Label({ text }: LabelProps): JSX.Element {
    return (
        <span className="px-2 py-1 cursor-default bg-emerald-500 text-emerald-60 text-gray-100 font-semibold sm:text-base text-sm inline-block align-top rounded hover:bg-emerald-500">
            {text}
        </span>
    );
}
