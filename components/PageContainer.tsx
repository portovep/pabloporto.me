interface PageContainerProps {
    children: React.ReactNode;
    wide?: boolean;
}

export default function PageContainer({ children, wide = false }: PageContainerProps) {
    return (
        <div
            className={`w-full ${wide ? 'max-w-6xl' : 'max-w-4xl'} mx-auto px-6 sm:px-8 pt-4 sm:pt-6 pb-6`}>
            {children}
        </div>
    );
}
