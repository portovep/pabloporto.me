type SectionTitleProps = {
    text: string;
};

export default function SectionTitle({ text }: SectionTitleProps): JSX.Element {
    return (
        <h1 className="ml-2 text-4xl sm:text-5xl md:text-4xl lg:text-6xl font-bold text-gray-700">
            {text}
        </h1>
    );
}
