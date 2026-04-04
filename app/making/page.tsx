import PageContainer from '@/components/PageContainer';
import { createMetadata } from '@/lib/metadata';
import GetInTouch from '@/components/GetInTouch';
import MakingContent from '@/content/pages/making.mdx';

export const metadata = createMetadata(
    'Making',
    'Apps and side projects I built for fun — from Chrome extensions to mobile apps and web platforms.',
    '/making'
);

export default function MakingPage() {
    return (
        <PageContainer wide>
            <section data-testid="making-intro" className="body-font text-muted-foreground">
                <MakingContent />
            </section>
            <GetInTouch />
        </PageContainer>
    );
}
