import React from 'react';
import { travelingStats } from 'content/travels/travelingStats';
import MapWithCountries from './worldmap.svg';

export default function WorldMap(): React.ReactElement {
    return (
        <div>
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
                            <span className="font-extrabold text-black"> black</span> the ones were
                            I lived for at least one month.
                        </p>
                    </div>
                    <div className="flex flex-wrap -m-4 text-center">
                        <div className="md:w-1/3 sm:w-1/2 w-full p-4">
                            <div className="px-4 py-6 border-2 border-gray-200 rounded-lg">
                                <h2 className="title-font text-3xl font-medium text-gray-900">
                                    {travelingStats.visited.length}
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
