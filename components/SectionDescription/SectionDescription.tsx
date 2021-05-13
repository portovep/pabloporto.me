type SectionDescriptionProps = {
    children: React.ReactNode;
};

export default function SectionDescription({ children }: SectionDescriptionProps): JSX.Element {
    return (
        <div className="ml-2 text-2xl sm:leading-8 space-y-4 font-light text-gray-500">
            {children}
        </div>
    );
}
