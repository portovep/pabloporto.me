'use client';

import dynamic from 'next/dynamic';

const WorldMap = dynamic(() => import('@/components/WorldMap/WorldMap'), {
    ssr: false,
    loading: () => (
        <div className="w-full animate-pulse" aria-label="Loading map" aria-busy="true">
            <div className="aspect-[1008/650] w-full min-h-0 bg-muted rounded-lg" />
            <section className="body-font text-muted-foreground">
                <div className="container py-12 mx-auto">
                    <div className="mb-14 flex flex-col w-full items-center">
                        <div className="h-8 w-48 bg-muted rounded mb-4" />
                        <div className="h-5 w-2/3 bg-muted rounded" />
                    </div>
                    <div className="flex flex-wrap -m-4 text-center">
                        {[0, 1, 2].map((i) => (
                            <div key={i} className="md:w-1/3 sm:w-1/2 w-full p-4">
                                <div className="px-4 py-6 border-2 border-border rounded-lg flex flex-col items-center gap-3">
                                    <div className="h-8 w-16 bg-muted rounded" />
                                    <div className="h-4 w-28 bg-muted rounded" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
});

export default function WorldMapClient() {
    return <WorldMap />;
}
