const SHELF_COUNTS = [6, 4, 6];

export default function ReadingLoading() {
    return (
        <div className="space-y-8 mb-8 animate-pulse">
            <div className="space-y-4">
                <div className="h-10 w-48 rounded-md bg-muted" />
                <div className="h-4 w-80 rounded-md bg-muted" />
            </div>
            <div className="space-y-16">
                {SHELF_COUNTS.map((count, i) => (
                    <div key={i} className="space-y-6">
                        <div className="h-6 w-40 rounded-md bg-muted" />
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                            {Array.from({ length: count }).map((_, j) => (
                                <div key={j} className="aspect-[2/3] rounded-md bg-muted" />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
