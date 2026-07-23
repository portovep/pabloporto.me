type UsesItemProps = {
    name: string;
    link?: string;
    children?: React.ReactNode;
};

export default function UsesItem({ name, link, children }: UsesItemProps) {
    return (
        <li
            className="sm:flex-row sm:items-baseline sm:gap-6 flex flex-col gap-1 py-3"
            data-testid="uses-item">
            <span className="sm:w-52 sm:shrink-0 text-foreground font-medium">
                {link ? (
                    <a href={link} target="_blank" rel="noopener noreferrer" className="text-link">
                        {name}
                    </a>
                ) : (
                    name
                )}
            </span>
            {/* MDX wraps item descriptions in a paragraph, so this has to be a block element. */}
            {children && <div className="text-muted-foreground">{children}</div>}
        </li>
    );
}
