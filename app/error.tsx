'use client';

import Link from 'next/link';

interface ErrorProps {
    error: Error & { digest?: string };
    reset: () => void;
}

export default function Error({ error: _error, reset }: ErrorProps) {
    return (
        <div className="mx-auto max-w-4xl grow px-4 py-8 sm:px-6 md:py-12">
            <div className="space-y-6">
                <h1 className="text-4xl font-extrabold tracking-tight text-foreground lg:text-5xl">
                    Something went wrong
                </h1>
                <p className="text-xl text-muted-foreground">
                    An error occurred while loading this page. You can try again by refreshing the
                    page or go back home.
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
