import { Project } from '../../lib/projects';
import Label from '../Label/Label';

type ProjectSummaryProps = {
    project: Project;
};

export default function ProjectSummary(props: ProjectSummaryProps): JSX.Element {
    const { name, date, role, technologies, teamSize, description } = props.project;
    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="px-4 sm:px-6 flex justify-between items-start">
                <div className="my-5">
                    <h3 className="text-2xl leading-6 font-medium text-gray-900">{name}</h3>
                    <p className="mt-2 max-w-2xl text-lg text-gray-500">{date}</p>
                </div>
                <div className="my-5">
                    <Label text={role} />
                </div>
            </div>
            <div className="border-t border-gray-200">
                <dl>
                    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500">Tech stack</dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                            {technologies}
                        </dd>
                    </div>
                    <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500">Role</dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{role}</dd>
                    </div>
                    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500">Team size</dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                            {teamSize}
                        </dd>
                    </div>
                    <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500">Company</dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                            ThoughtWorks
                        </dd>
                    </div>
                    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
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
