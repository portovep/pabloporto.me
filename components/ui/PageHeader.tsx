type PageHeaderProps = {
    title: string;
    children?: React.ReactNode;
};

export default function PageHeader({ title, children }: PageHeaderProps) {
    return (
        <div className="space-y-4" data-testid="page-header">
            <h1 className="font-heading text-foreground text-4xl sm:text-5xl inline-block font-extrabold tracking-tight">
                {title}
            </h1>
            {children && <p className="text-muted-foreground text-xl">{children}</p>}
        </div>
    );
}
