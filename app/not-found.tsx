import Link from 'next/link';

export default function NotFound() {
    return (
        <div className="mx-auto max-w-4xl grow px-4 py-8 sm:px-6 md:py-12">
            <div className="space-y-6">
                <h1 className="text-4xl font-extrabold tracking-tight text-foreground lg:text-5xl">
                    Page not found
                </h1>
                <p className="text-xl text-muted-foreground">
                    The page you&apos;re looking for doesn&apos;t exist or has been moved.
                </p>
                <div className="flex flex-wrap gap-4">
                    <Link
                        href="/"
                        className="inline-flex items-center text-lg font-medium text-foreground hover:text-emerald-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                        <span aria-hidden="true" className="mr-2">
                            ←
                        </span>
                        Back to home
                    </Link>
                </div>
            </div>
        </div>
    );
}
