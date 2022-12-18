import { GetStaticProps } from 'next';
import Link from 'next/link';
import Layout from '../../components/Layout/Layout';
import ProjectSummary from '../../components/ProjectSummary/ProjectSummary';
import { PageHeader } from '../../components/ui';
import { getSortedProjectData, ProjectData } from '../../lib/projects';

type WorkingProps = {
    allProjectData: ProjectData[];
};

export default function Working({ allProjectData }: WorkingProps): JSX.Element {
    return (
        <Layout pageTitle="At work">
            <section data-testid="working-intro" className="mt-10 text-xl leading-6">
                <PageHeader title="At work">
                    Some of the projects and products I worked on over the last years. You can also
                    <Link
                        href="/stack"
                        className="text-emerald-500 hover:text-emerald-600 font-medium"
                        rel="noopener noreferrer">
                        &nbsp;take a look at my preferred tools.
                    </Link>
                </PageHeader>
                <ul className="mt-10">
                    {allProjectData.map((project) => (
                        <li data-testid="project-summary" className="mb-10" key={project.id}>
                            <ProjectSummary project={project} />
                        </li>
                    ))}
                </ul>
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
