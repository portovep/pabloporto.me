import React from 'react';
import { GetStaticProps } from 'next';
import Link from 'next/link';
import Layout from '../../components/Layout/Layout';
import FilteredProjects from '../../components/FilteredProjects/FilteredProjects';
import { PageHeader } from '../../components/ui';
import { getSortedProjectData, ProjectData } from '../../lib/projects';

type WorkingProps = {
    allProjectData: ProjectData[];
};

export default function Working({ allProjectData }: WorkingProps): React.ReactElement {
    return (
        <Layout pageTitle="At work">
            <section data-testid="working-intro" className="mt-10 text-xl leading-6">
                <PageHeader title="At work" />
                <section className="w-full leading-relaxed">
                    <div className="mt-10 mb-10">
                        <h2 className="title-font sm:text-4xl mb-4 text-3xl font-medium text-gray-900">
                            What I do
                        </h2>
                    </div>
                    <p className="pb-10">
                        During my career, I have taken multiple roles, from full-stack software
                        engineer to other roles like infrastructure and data engineer delivering
                        many products in multiple sectors from retail to healthcare, travel, and
                        others. I have been working in digital products and digital platforms for
                        close to a decade. Currently, I help companies apply modern software
                        engineering practices to data management so that they can unlock value from
                        their data and become data-driven.
                    </p>
                    <ul className="pl-15 px-10 pb-10 space-y-5 list-disc">
                        <li>
                            I help companies build software and data systems right with modern
                            software and data engineering tools and practices.
                        </li>
                        <li>
                            I work with product and business people to incrementally design easy to
                            use products that address complex customer problems.
                        </li>
                        <li>
                            I bring software engineering and platform thinking to help teams adopt
                            and scale effective software engineering practices.
                        </li>
                        <li>
                            I lead and build{' '}
                            <a
                                href="https://www.svpg.com/empowered-product-teams/"
                                target="_blank"
                                className="text-emerald-500 hover:text-emerald-600 font-medium"
                                rel="noopener noreferrer">
                                empowered
                            </a>{' '}
                            and multi-disciplinary product and platform teams.
                        </li>
                        <li>
                            I train, coach, and mentor people on modern software delivery practices,
                            agile/lean ways of working, and technical leadership.
                        </li>
                        <li>
                            Finally, I write and{' '}
                            <Link
                                href="/blog"
                                className="text-emerald-500 hover:text-emerald-600 font-medium"
                                rel="noopener noreferrer">
                                share what I learn and build in public
                            </Link>
                            .
                        </li>
                    </ul>
                    <p className="pb-10 leading-relaxed">
                        Currently, I work as Lead Software Consultant at{' '}
                        <a
                            href="https://thoughtworks.com"
                            target="_blank"
                            className="text-emerald-500 hover:text-emerald-600 font-medium"
                            rel="noopener noreferrer">
                            Thoughtworks
                        </a>{' '}
                        where I lead high-performing delivery teams building data and digital
                        products for our clients.
                    </p>
                </section>
                <section className="w-full">
                    <div className="container mx-auto mb-20">
                        <div className="mt-10 mb-10">
                            <h2 className="title-font sm:text-4xl mb-4 text-3xl font-medium text-gray-900">
                                How I do it
                            </h2>
                            <p className="leading-relaxed">
                                The software engineering principles and practices that drive my
                                work.
                            </p>
                        </div>
                        <div className="sm:mx-auto sm:mb-20 flex flex-wrap -mx-2 text-xl">
                            <div className="sm:w-1/2 w-full p-2">
                                <div className="flex items-center h-full p-4 bg-gray-100 rounded">
                                    <svg
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="3"
                                        className="shrink-0 w-6 h-6 mr-4 text-green-500"
                                        viewBox="0 0 24 24">
                                        <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                        <path d="M22 4L12 14.01l-3-3"></path>
                                    </svg>
                                    <span className="title-font font-medium">TDD</span>
                                </div>
                            </div>
                            <div className="sm:w-1/2 w-full p-2">
                                <div className="flex items-center h-full p-4 bg-gray-100 rounded">
                                    <svg
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="3"
                                        className="shrink-0 w-6 h-6 mr-4 text-green-500"
                                        viewBox="0 0 24 24">
                                        <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                        <path d="M22 4L12 14.01l-3-3"></path>
                                    </svg>
                                    <span className="title-font font-medium">Pair programming</span>
                                </div>
                            </div>
                            <div className="sm:w-1/2 w-full p-2">
                                <div className="flex items-center h-full p-4 bg-gray-100 rounded">
                                    <svg
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="3"
                                        className="shrink-0 w-6 h-6 mr-4 text-green-500"
                                        viewBox="0 0 24 24">
                                        <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                        <path d="M22 4L12 14.01l-3-3"></path>
                                    </svg>
                                    <span className="title-font font-medium">
                                        Continuous delivery
                                    </span>
                                </div>
                            </div>
                            <div className="sm:w-1/2 w-full p-2">
                                <div className="flex items-center h-full p-4 bg-gray-100 rounded">
                                    <svg
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="3"
                                        className="shrink-0 w-6 h-6 mr-4 text-green-500"
                                        viewBox="0 0 24 24">
                                        <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                        <path d="M22 4L12 14.01l-3-3"></path>
                                    </svg>
                                    <span className="title-font font-medium">
                                        Distributed systems architecture
                                    </span>
                                </div>
                            </div>
                            <div className="sm:w-1/2 w-full p-2">
                                <div className="flex items-center h-full p-4 bg-gray-100 rounded">
                                    <svg
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="3"
                                        className="shrink-0 w-6 h-6 mr-4 text-green-500"
                                        viewBox="0 0 24 24">
                                        <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                        <path d="M22 4L12 14.01l-3-3"></path>
                                    </svg>
                                    <span className="title-font font-medium">
                                        Platform engineering
                                    </span>
                                </div>
                            </div>
                            <div className="sm:w-1/2 w-full p-2">
                                <div className="flex items-center h-full p-4 bg-gray-100 rounded">
                                    <svg
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="3"
                                        className="shrink-0 w-6 h-6 mr-4 text-green-500"
                                        viewBox="0 0 24 24">
                                        <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                        <path d="M22 4L12 14.01l-3-3"></path>
                                    </svg>
                                    <span className="title-font font-medium">
                                        Technical leadership
                                    </span>
                                </div>
                            </div>
                            <div className="sm:w-1/2 w-full p-2">
                                <div className="flex items-center h-full p-4 bg-gray-100 rounded">
                                    <svg
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="3"
                                        className="shrink-0 w-6 h-6 mr-4 text-green-500"
                                        viewBox="0 0 24 24">
                                        <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                        <path d="M22 4L12 14.01l-3-3"></path>
                                    </svg>
                                    <span className="title-font font-medium">Agile and Lean</span>
                                </div>
                            </div>
                            <div className="sm:w-1/2 w-full p-2">
                                <div className="flex items-center h-full p-4 bg-gray-100 rounded">
                                    <svg
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="3"
                                        className="shrink-0 w-6 h-6 mr-4 text-green-500"
                                        viewBox="0 0 24 24">
                                        <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                        <path d="M22 4L12 14.01l-3-3"></path>
                                    </svg>
                                    <span className="title-font font-medium">
                                        Infrastructure as code
                                    </span>
                                </div>
                            </div>
                            <div className="sm:w-1/2 w-full p-2">
                                <div className="flex items-center h-full p-4 bg-gray-100 rounded">
                                    <svg
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="3"
                                        className="shrink-0 w-6 h-6 mr-4 text-green-500"
                                        viewBox="0 0 24 24">
                                        <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                        <path d="M22 4L12 14.01l-3-3"></path>
                                    </svg>
                                    <span className="title-font font-medium">
                                        Trunk based development
                                    </span>
                                </div>
                            </div>
                            <div className="sm:w-1/2 w-full p-2">
                                <div className="flex items-center h-full p-4 bg-gray-100 rounded">
                                    <svg
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="3"
                                        className="shrink-0 w-6 h-6 mr-4 text-green-500"
                                        viewBox="0 0 24 24">
                                        <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                        <path d="M22 4L12 14.01l-3-3"></path>
                                    </svg>
                                    <span className="title-font font-medium">
                                        Continuous improvement
                                    </span>
                                </div>
                            </div>
                            <div className="sm:w-1/2 w-full p-2">
                                <div className="flex items-center h-full p-4 bg-gray-100 rounded">
                                    <svg
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="3"
                                        className="shrink-0 w-6 h-6 mr-4 text-green-500"
                                        viewBox="0 0 24 24">
                                        <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                        <path d="M22 4L12 14.01l-3-3"></path>
                                    </svg>
                                    <span className="title-font font-medium">
                                        Evolutionary architecture
                                    </span>
                                </div>
                            </div>
                            <div className="sm:w-1/2 w-full p-2">
                                <div className="flex items-center h-full p-4 bg-gray-100 rounded">
                                    <svg
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="3"
                                        className="shrink-0 w-6 h-6 mr-4 text-green-500"
                                        viewBox="0 0 24 24">
                                        <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                        <path d="M22 4L12 14.01l-3-3"></path>
                                    </svg>
                                    <span className="title-font font-medium">Clean code</span>
                                </div>
                            </div>
                            <div className="sm:w-1/2 w-full p-2">
                                <div className="flex items-center h-full p-4 bg-gray-100 rounded">
                                    <svg
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="3"
                                        className="shrink-0 w-6 h-6 mr-4 text-green-500"
                                        viewBox="0 0 24 24">
                                        <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                        <path d="M22 4L12 14.01l-3-3"></path>
                                    </svg>
                                    <span className="title-font font-medium">Refactoring</span>
                                </div>
                            </div>
                            <div className="sm:w-1/2 w-full p-2">
                                <div className="flex items-center h-full p-4 bg-gray-100 rounded">
                                    <svg
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="3"
                                        className="shrink-0 w-6 h-6 mr-4 text-green-500"
                                        viewBox="0 0 24 24">
                                        <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                        <path d="M22 4L12 14.01l-3-3"></path>
                                    </svg>
                                    <span className="title-font font-medium">Empowered teams</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="w-full leading-relaxed">
                    <div className="mt-10 mb-10">
                        <h2 className="title-font sm:text-4xl mb-4 text-3xl font-medium text-gray-900">
                            Projects
                        </h2>
                        <p>
                            Some of the projects and products I worked on over the last years. You
                            can also
                            <Link
                                href="/stack"
                                className="text-emerald-500 hover:text-emerald-600 font-medium"
                                rel="noopener noreferrer">
                                &nbsp;take a look at my preferred tools.
                            </Link>
                        </p>
                    </div>
                    <FilteredProjects projects={allProjectData} />
                </section>
            </section>
        </Layout>
    );
}

export const getStaticProps: GetStaticProps = async () => {
    const allProjectData = await getSortedProjectData();
    return {
        props: {
            allProjectData: allProjectData
        }
    };
};
