'use client';

import { useEffect, useRef } from 'react';
import { travelingStats, uniqueVisitedCount } from 'content/travels/travelingStats';
import MapWithCountries from './worldmap.svg';

const livedIds = new Set(travelingStats.lived.map((c) => c.id));
const visitedIds = new Set(travelingStats.visited.map((c) => c.id));

function getPathClass(id: string): string {
    if (livedIds.has(id)) return 'lived';
    if (visitedIds.has(id)) return 'visited';
    return 'land';
}

export default function WorldMap() {
    const containerRef = useRef<HTMLDivElement>(null);

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
            className="world-map aspect-[1008/650] w-full min-h-0"
            role="img"
            aria-label="Map of visited and lived countries">
            <MapWithCountries
                className="min-h-max w-full min-w-full"
                viewBox="0 0 1008 650"
                alt="Map with my visited and lived countries"
            />
            <section className="body-font text-gray-600">
                <div className="container px-5 py-12 mx-auto">
                    <div className="mb-14 flex flex-col w-full text-center">
                        <h1 className="sm:text-3xl title-font mb-4 text-2xl font-medium text-gray-900">
                            Exploring the world
                        </h1>
                        <p className="lg:w-2/3 mx-auto text-xl leading-relaxed">
                            In <span className="text-emerald-500 font-extrabold">green</span> are
                            the countries I visited so far, in
                            <span className="font-extrabold text-black"> black</span> the ones where
                            I lived for at least one month.
                        </p>
                    </div>
                    <div className="flex flex-wrap -m-4 text-center">
                        <div className="md:w-1/3 sm:w-1/2 w-full p-4">
                            <div className="px-4 py-6 border-2 border-gray-200 rounded-lg">
                                <h2 className="title-font text-3xl font-medium text-gray-900">
                                    {uniqueVisitedCount}
                                </h2>
                                <p className="leading-relaxed">countries visited</p>
                            </div>
                        </div>
                        <div className="md:w-1/3 sm:w-1/2 w-full p-4">
                            <div className="px-4 py-6 border-2 border-gray-200 rounded-lg">
                                <h2 className="title-font text-3xl font-medium text-gray-900">
                                    {travelingStats.lived.length}
                                </h2>
                                <p className="leading-relaxed">countries lived</p>
                            </div>
                        </div>
                        <div className="md:w-1/3 sm:w-1/2 w-full p-4">
                            <div className="px-4 py-6 border-2 border-gray-200 rounded-lg">
                                <h2 className="title-font text-3xl font-medium text-gray-900">
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
