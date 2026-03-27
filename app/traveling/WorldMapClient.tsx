'use client';

import dynamic from 'next/dynamic';

const WorldMap = dynamic(() => import('@/components/WorldMap/WorldMap'), {
    ssr: false,
    loading: () => (
        <div
            className="aspect-[1008/650] w-full min-h-0 flex items-center justify-center bg-muted rounded-lg"
            aria-label="Loading map">
            <span className="text-muted-foreground">Loading map…</span>
        </div>
    )
});

export default function WorldMapClient() {
    return <WorldMap />;
}
