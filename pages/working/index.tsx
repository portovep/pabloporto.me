import { GetStaticProps } from 'next';
import Link from 'next/link';
import Layout, { siteTitle } from '../../components/Layout/Layout';
import ProjectSummary from '../../components/ProjectSummary/ProjectSummary';
import SectionDescription from '../../components/SectionDescription/SectionDescription';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import { getSortedProjectData, ProjectData } from '../../lib/projects';

type WorkingProps = {
    allProjectData: ProjectData[];
};

export default function Working({ allProjectData }: WorkingProps): JSX.Element {
    return (
        <Layout pageTitle={`${siteTitle} - At work`}>
            <section className="mt-10 text-xl leading-6">
                <SectionTitle text="At work" />
                <SectionDescription>
                    <p>
                        Some of the projects I took part over the last 7+ years. You can also
                        <Link href="/stack">
                            <a
                                className="text-emerald-500 hover:text-emerald-600 font-medium"
                                rel="noopener noreferrer">
                                &nbsp;take a look at my preferred tech stack.
                            </a>
                        </Link>
                    </p>
                </SectionDescription>
                <ul className="mt-10">
                    {allProjectData.map((project) => (
                        <li className="mb-10" key={project.id}>
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
