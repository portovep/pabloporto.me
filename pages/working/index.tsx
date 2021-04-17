import { GetStaticProps } from 'next';
import Head from 'next/head';
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
                <h1 className="ml-2 text-xl font-bold text-gray-700 md:text-2xl">My Experience</h1>
                <ul className="mt-8">
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
