import { GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import Layout, { siteTitle } from '../../components/Layout/Layout';
import Metadata from '../../components/Metadata/Metadata';
import ProjectSummary from '../../components/ProjectSummary/ProjectSummary';
import SectionDescription from '../../components/SectionDescription/SectionDescription';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import { getSortedPojectData, Project } from '../../lib/projects';

type WorkingProps = {
    allProjectData: Project[];
};

export default function Working({ allProjectData }: WorkingProps): JSX.Element {
    return (
        <Layout>
            <Head>
                <Metadata title={`${siteTitle} - At work`} />
            </Head>

            <section className="mt-10 text-xl leading-6">
                <SectionTitle text="At work" />
                <SectionDescription>
                    As a software consultant, I get to work for different clients building
                    differrent types of software systems with different techniques and tools. In
                    this page you can see some of the projects I took part over the last 7+ years.
                    You can also
                    <Link href="/stack">
                        <a
                            className="text-indigo-600 hover:text-indigo-800 font-medium"
                            rel="noopener noreferrer">
                            &nbsp;check my preferred tech stack.
                        </a>
                    </Link>
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
