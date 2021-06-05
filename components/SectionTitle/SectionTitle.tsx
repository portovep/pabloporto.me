type SectionTitleProps = {
    text: string;
};

export default function SectionTitle({ text }: SectionTitleProps): JSX.Element {
    return (
        <h1 className="sm:text-5xl md:text-4xl mb-4 ml-2 text-4xl font-bold text-gray-800">
            {text}
        </h1>
    );
}
