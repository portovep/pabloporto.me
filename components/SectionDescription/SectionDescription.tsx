type SectionDescriptionProps = {
    children: React.ReactNode;
};

export default function SectionDescription({ children }: SectionDescriptionProps): JSX.Element {
    return (
        <div className="sm:leading-8 ml-2 space-y-4 text-2xl font-light text-gray-500">
            {children}
        </div>
    );
}
