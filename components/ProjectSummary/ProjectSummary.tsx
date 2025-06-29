import React from 'react';
import { ReactNode } from 'react';
import * as Collapsible from '@radix-ui/react-collapsible';
import { useState } from 'react';

import { ProjectData } from '../../lib/projects';
import { Date } from '../ui';

type ProjectSummaryProps = {
    project: ProjectData;
};

const DATE_FORMAT_YEAR = 'yyyy';

export default function ProjectSummary(props: ProjectSummaryProps): React.ReactElement {
    const { name, date, roles, location, technologies, teamSize, industry, contentHtml } =
        props.project;
    const [open, setOpen] = useState(false);

    return (
        <Collapsible.Root
            open={open}
            onOpenChange={setOpen}
            className="overflow-hidden bg-white border-2 border-gray-200 rounded-lg">
            <Collapsible.Trigger
                className={`${
                    open && 'bg-gray-100'
                } focus:ring-4 focus:ring-gray-200 hover:bg-gray-100 flex items-center justify-between w-full p-5 text-left`}>
                <div className="my-5">
                    <h3 className="font-semibol text-2xl font-bold text-gray-700">{name}</h3>
                    <p className="max-w-2xl mt-2 text-lg text-gray-500">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="inline h-4 w-4 mr-1.5 align-baseline"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                            />
                        </svg>
                        <Date dateString={date} dateFormat={DATE_FORMAT_YEAR} />
                    </p>
                </div>
                <svg
                    data-accordion-icon
                    className={`shrink-0 w-6 h-6 ${open && 'rotate-180'}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"></path>
                </svg>
            </Collapsible.Trigger>
            <Collapsible.Content>
                <div className="border-t border-gray-200">
                    <dl>
                        <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 px-4 py-5 bg-white">
                            <dt className="text-sm font-medium text-gray-500">Team size</dt>
                            <dd className="sm:mt-0 sm:col-span-2 mt-1 text-sm text-gray-900">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="inline w-5 h-5 mr-1 align-top"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                                    />
                                </svg>
                                x {teamSize}
                            </dd>
                        </div>
                        <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 px-4 py-5 bg-white">
                            <dt className="text-sm font-medium text-gray-500">Role</dt>
                            <dd className="sm:mt-0 sm:col-span-2 mt-1 text-sm text-gray-900">
                                {roles.map((role) => (
                                    <span
                                        key={role}
                                        className="uppercase py-1 px-1.5 mr-0.5 mb-0.5 inline-flex text-xs leading-5 font-semibold rounded-sm cursor-default bg-emerald-400 text-white">
                                        {role}
                                    </span>
                                ))}
                            </dd>
                        </div>
                        <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 px-4 py-5 bg-white">
                            <dt className="text-sm font-medium text-gray-500">Location</dt>
                            <dd className="sm:mt-0 sm:col-span-2 mt-1 text-sm text-gray-900">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="inline w-5 h-5 mr-1 align-top"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                    />
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                    />
                                </svg>
                                {location}
                            </dd>
                        </div>
                        <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 px-4 py-5 bg-white">
                            <dt className="text-sm font-medium text-gray-500">Tech stack</dt>
                            <dd className="sm:mt-0 sm:col-span-2 mt-2 text-sm text-gray-900">
                                {technologies.map((technology) => (
                                    <span
                                        key={technology}
                                        className="uppercase py-1 px-1.5 mr-0.5 mb-0.5 inline-flex text-xs leading-5 font-semibold rounded-sm cursor-default bg-emerald-400 text-white">
                                        {technology}
                                    </span>
                                ))}
                            </dd>
                        </div>
                        <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 px-4 py-5 bg-white">
                            <dt className="text-sm font-medium text-gray-500">Industry</dt>
                            <dd className="sm:mt-0 sm:col-span-2 mt-1 text-sm text-gray-900">
                                {industry}
                            </dd>
                        </div>
                        <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 px-4 py-5 bg-white">
                            <dt className="text-sm font-medium text-gray-500">About</dt>
                            <dd className="sm:mt-0 sm:col-span-2 mt-1 text-sm text-gray-900">
                                <div
                                    className="lg:prose-sm prose-purple prose"
                                    dangerouslySetInnerHTML={{ __html: contentHtml }}
                                />
                            </dd>
                        </div>
                    </dl>
                </div>
            </Collapsible.Content>
        </Collapsible.Root>
    );
}
