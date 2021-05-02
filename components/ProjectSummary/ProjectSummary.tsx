import { Project } from '../../lib/projects';

type ProjectSummaryProps = {
    project: Project;
};

export default function ProjectSummary(props: ProjectSummaryProps): JSX.Element {
    const { name, date, role, location, technologies, teamSize, description } = props.project;
    return (
        <div className="overflow-hidden border-2 border-gray-200 bg-white rounded-lg hover:bg-white hover:shadow-lg">
            <div className="pl-4 sm:pl-6 flex justify-between items-start">
                <div className="my-5">
                    <h3 className="text-2xl leading-6 font-semibold text-gray-900">{name}</h3>
                    <p className="mt-2 max-w-2xl text-lg text-gray-500">
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
                        {date}
                    </p>
                </div>
            </div>
            <div className="border-t border-gray-200">
                <dl>
                    <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500">Team size</dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 mr-1 inline align-top"
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
                    <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500">Role</dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                            <span className="uppercase py-1 px-1.5 mr-0.5 mb-0.5 inline-flex text-xs leading-5 font-semibold rounded-sm cursor-default bg-gray-400 text-white">
                                {role}
                            </span>
                        </dd>
                    </div>
                    <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500">Location</dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="inline h-5 w-5 mr-1 align-top"
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
                    <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500">Tech stack</dt>
                        <dd className="mt-2  text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                            {technologies.map((technology) => (
                                <span
                                    key={technology}
                                    className="uppercase py-1 px-1.5 mr-0.5 mb-0.5 inline-flex text-xs leading-5 font-semibold rounded-sm cursor-default bg-gray-400 text-white">
                                    {technology}
                                </span>
                            ))}
                        </dd>
                    </div>
                    <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500">About</dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                            <div
                                className="prose lg:prose-sm prose-purple"
                                dangerouslySetInnerHTML={{ __html: description }}
                            />
                        </dd>
                    </div>
                </dl>
            </div>
        </div>
    );
}
