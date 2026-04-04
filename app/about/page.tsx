import PageContainer from '@/components/PageContainer';
import { createMetadata } from '@/lib/metadata';
import GetInTouch from '@/components/GetInTouch';
import AboutContent from '@/content/pages/about.mdx';

export const metadata = createMetadata(
    'About',
    'Software engineer, coffee lover, and traveler based in Barcelona. Learn more about my background, work, and interests.',
    '/about'
);

export default function AboutPage() {
    return (
        <PageContainer>
            <section className="max-w-3xl text-xl leading-6">
                <AboutContent />
                <GetInTouch />
            </section>
        </PageContainer>
    );
}
