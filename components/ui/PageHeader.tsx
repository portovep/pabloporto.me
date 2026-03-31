type PageHeaderProps = {
    title: string;
    children?: React.ReactNode;
};

export default function PageHeader({ title, children }: PageHeaderProps) {
    return (
        <div className="space-y-4">
            <h1 className="font-heading text-foreground lg:text-5xl inline-block text-4xl font-extrabold tracking-tight">
                {title}
            </h1>
            {children && <p className="text-muted-foreground text-xl">{children}</p>}
        </div>
    );
}
