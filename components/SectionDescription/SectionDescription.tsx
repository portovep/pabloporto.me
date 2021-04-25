type SectionDescriptionProps = {
    children: React.ReactChild | React.ReactChild[];
};

export default function SectionDescription({ children }: SectionDescriptionProps): JSX.Element {
    return <p className="ml-2 mt-5 text-lg sm:text-xl sm:leading-8 space-y-6">{children}</p>;
}
