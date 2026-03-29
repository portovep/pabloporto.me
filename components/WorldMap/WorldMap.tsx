'use client';

import { useEffect, useRef, useState } from 'react';
import { travelingStats, uniqueVisitedCount } from 'content/travels/travelingStats';
import MapWithCountries from './worldmap.svg';

const livedIds = new Set(travelingStats.lived.map((c) => c.id));
const visitedIds = new Set(travelingStats.visited.map((c) => c.id));
const idToName = new Map<string, string>([
    ...travelingStats.visited.map((c) => [c.id, c.title] as const),
    ...travelingStats.lived.map((c) => [c.id, c.title] as const)
]);

function getPathClass(id: string): string {
    if (livedIds.has(id)) return 'lived';
    if (visitedIds.has(id)) return 'visited';
    return 'land';
}

export default function WorldMap() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [tooltip, setTooltip] = useState<{ x: number; y: number; name: string } | null>(null);

    // Apply land/visited/lived classes to map paths. Run on mount and after a tick so we
    // catch the SVG when it mounts (e.g. after dynamic import). Path ids are preserved by
    // next.config.js svgoConfig (cleanupIds: false, no prefixIds).
    useEffect(() => {
        const applyPathClasses = () => {
            const svg = containerRef.current?.querySelector('svg');
            if (!svg) return;
            svg.querySelectorAll<SVGPathElement>('path[id]').forEach((path) => {
                const id = path.getAttribute('id');
                if (id) path.setAttribute('class', getPathClass(id));
            });
        };

        applyPathClasses();
        const rafId = requestAnimationFrame(applyPathClasses);
        const timeoutId = window.setTimeout(applyPathClasses, 200);

        return () => {
            cancelAnimationFrame(rafId);
            clearTimeout(timeoutId);
        };
    }, []);

    return (
        <div
            ref={containerRef}
            className="world-map w-full"
            onMouseMove={(e) => {
                const target = e.target as SVGPathElement;
                if (target.tagName === 'path') {
                    const id = target.getAttribute('id');
                    const name = id ? (idToName.get(id) ?? null) : null;
                    if (name) {
                        setTooltip({ x: e.clientX, y: e.clientY, name });
                        return;
                    }
                }
                setTooltip(null);
            }}
            onMouseLeave={() => setTooltip(null)}>
            <div
                className="aspect-[1008/650] w-full min-h-0"
                role="img"
                aria-label="Map of visited and lived countries">
                <MapWithCountries
                    className="min-h-max w-full min-w-full"
                    viewBox="0 0 1008 650"
                    alt="Map with my visited and lived countries"
                />
            </div>
            {tooltip && (
                <div
                    data-testid="map-tooltip"
                    className="fixed z-50 pointer-events-none px-2 py-1 text-xs font-medium rounded-md bg-primary text-primary-foreground shadow"
                    style={{ left: tooltip.x + 12, top: tooltip.y + 12 }}>
                    {tooltip.name}
                </div>
            )}
            <section className="body-font text-muted-foreground">
                <div className="container py-12 mx-auto">
                    <div className="mb-14 flex flex-col w-full text-center">
                        <h1 className="sm:text-3xl title-font mb-4 text-2xl font-medium text-foreground">
                            Exploring the world
                        </h1>
                        <p className="lg:w-2/3 mx-auto text-xl leading-relaxed">
                            In <span className="text-emerald-500 font-extrabold">green</span> are
                            the countries I visited so far, in
                            <span className="font-extrabold text-foreground dark:hidden">
                                {' '}
                                black
                            </span>
                            <span className="font-extrabold text-foreground hidden dark:inline">
                                {' '}
                                white
                            </span>{' '}
                            the ones where I lived for at least one month.
                        </p>
                    </div>
                    <div className="flex flex-wrap -m-4 text-center">
                        <div className="md:w-1/3 sm:w-1/2 w-full p-4">
                            <div className="px-4 py-6 border-2 border-border rounded-lg">
                                <h2 className="title-font text-3xl font-medium text-foreground">
                                    {uniqueVisitedCount}
                                </h2>
                                <p className="leading-relaxed">countries visited</p>
                            </div>
                        </div>
                        <div className="md:w-1/3 sm:w-1/2 w-full p-4">
                            <div className="px-4 py-6 border-2 border-border rounded-lg">
                                <h2 className="title-font text-3xl font-medium text-foreground">
                                    {travelingStats.lived.length}
                                </h2>
                                <p className="leading-relaxed">countries lived</p>
                            </div>
                        </div>
                        <div className="md:w-1/3 sm:w-1/2 w-full p-4">
                            <div className="px-4 py-6 border-2 border-border rounded-lg">
                                <h2 className="title-font text-3xl font-medium text-foreground">
                                    {travelingStats.continents.length}
                                </h2>
                                <p className="leading-relaxed">continents visited</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
