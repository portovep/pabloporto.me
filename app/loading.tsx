export default function Loading() {
    return (
        <div className="mx-auto max-w-4xl grow px-4 py-8 sm:px-6 md:py-12" aria-label="Loading">
            <div className="animate-pulse space-y-6">
                <div className="h-10 w-3/4 max-w-md rounded-md bg-muted" />
                <div className="space-y-3">
                    <div className="h-4 w-full rounded-md bg-muted" />
                    <div className="h-4 w-full rounded-md bg-muted" />
                    <div className="h-4 w-5/6 rounded-md bg-muted" />
                </div>
                <div className="space-y-3 pt-4">
                    <div className="h-4 w-full rounded-md bg-muted" />
                    <div className="h-4 w-full rounded-md bg-muted" />
                    <div className="h-4 w-4/6 rounded-md bg-muted" />
                </div>
            </div>
        </div>
    );
}
