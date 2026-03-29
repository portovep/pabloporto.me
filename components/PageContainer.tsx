interface PageContainerProps {
    children: React.ReactNode;
    wide?: boolean;
}

export default function PageContainer({
    children,
    wide = false
}: PageContainerProps): React.ReactElement {
    return (
        <div className={`${wide ? 'max-w-6xl' : 'max-w-4xl'} mx-auto px-8 py-6`}>{children}</div>
    );
}
