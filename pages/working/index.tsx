import { GetStaticProps } from 'next';
import Link from 'next/link';
import Layout, { siteTitle } from '../../components/Layout/Layout';
import ProjectSummary from '../../components/ProjectSummary/ProjectSummary';
import SectionDescription from '../../components/SectionDescription/SectionDescription';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import { getSortedPojectData, Project } from '../../lib/projects';

type WorkingProps = {
    allProjectData: Project[];
};

export default function Working({ allProjectData }: WorkingProps): JSX.Element {
    return (
        <Layout pageTitle={`${siteTitle} - At work`}>
            <section className="mt-10 text-xl leading-6">
                <SectionTitle text="At work" />
                <SectionDescription>
                    <p>
                        As a software consultant, I get to work for different clients building
                        differrent types of software systems with different techniques and tools.
                    </p>
                    <p>
                        In this page you can see some of the projects I took part over the last 7+
                        years. You can also
                        <Link href="/stack">
                            <a
                                className="text-emerald-500 hover:text-emerald-600 font-medium"
                                rel="noopener noreferrer">
                                &nbsp;check my preferred tech stack.
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
    const allProjectData = await getSortedPojectData();
    return {
        props: {
            allProjectData: allProjectData
        }
    };
};
