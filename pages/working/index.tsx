import { GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import Layout, { siteTitle } from '../../components/Layout/Layout';
import ProjectSummary from '../../components/ProjectSummary/ProjectSummary';
import { getSortedPojectData, Project } from '../../lib/projects';

type WorkingProps = {
    allProjectData: Project[];
};

export default function Working({ allProjectData }: WorkingProps): JSX.Element {
    return (
        <Layout>
            <Head>
                <title>{`${siteTitle} - At work`}</title>
            </Head>

            <section className="mt-8 text-xl leading-6">
                <h1 className="ml-2 text-4xl font-bold text-gray-700 md:text-4xl">My experience</h1>
                <p className="ml-2 mt-5 text-lg sm:text-xl sm:leading-8 space-y-6 max-w-4xl">
                    As a consultant, I get to work for different clients building differrent types
                    of software systems with different tools. In this page you can see some of the
                    projects I took part over the last 7+ years. You can also
                    <Link href="/stack">
                        <a
                            className="text-indigo-600 hover:text-indigo-800 font-medium"
                            rel="noopener noreferrer">
                            &nbsp;check my preferred tech stack.
                        </a>
                    </Link>
                </p>
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
