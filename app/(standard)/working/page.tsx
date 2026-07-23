import FilteredProjects from '@/components/FilteredProjects';
import { getSortedProjectData } from '@/lib/projects';
import { createMetadata } from '@/lib/metadata';
import GetInTouch from '@/components/GetInTouch';
import WorkingIntro from '@/content/pages/working-intro.mdx';

export const metadata = createMetadata(
    'At work',
    'Over 12 years leading engineering teams and building data and AI systems for startups and enterprises. See my work and the principles behind it.',
    '/working'
);

export default async function WorkingPage() {
    const allProjectData = getSortedProjectData();

    return (
        <section data-testid="working-intro">
            <WorkingIntro />
            <section className="w-full leading-relaxed">
                <div className="mt-10 mb-10">
                    <h2 className="heading-section mb-4">Projects</h2>
                </div>
                <FilteredProjects projects={allProjectData} />
            </section>
            <GetInTouch />
        </section>
    );
}
