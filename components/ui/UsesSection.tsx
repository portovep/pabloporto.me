type UsesSectionProps = {
    title: string;
    children: React.ReactNode;
};

export default function UsesSection({ title, children }: UsesSectionProps) {
    return (
        <section className="mt-12" data-testid="uses-section">
            <h2 className="font-heading text-foreground text-sm font-semibold tracking-widest uppercase">
                {title}
            </h2>
            <ul className="divide-border/60 mt-4 divide-y">{children}</ul>
        </section>
    );
}
