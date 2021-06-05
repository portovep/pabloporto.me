type LabelProps = {
    text: string;
};

export default function Label({ text }: LabelProps): JSX.Element {
    return (
        <span className="bg-emerald-500 text-emerald-60 sm:text-base hover:bg-emerald-500 inline-block px-2 py-1 text-sm font-semibold text-gray-100 align-top rounded cursor-default">
            {text}
        </span>
    );
}
