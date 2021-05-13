type SectionTitleProps = {
    text: string;
};

export default function SectionTitle({ text }: SectionTitleProps): JSX.Element {
    return (
        <h1 className="ml-2 mb-4 text-4xl sm:text-5xl md:text-4xl font-bold text-gray-800">
            {text}
        </h1>
    );
}
