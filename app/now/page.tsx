import PageContainer from '@/components/PageContainer';
import { createMetadata } from '@/lib/metadata';
import NowContent from '@/content/pages/now.mdx';

export const metadata = createMetadata(
    'Now',
    'What I am currently focused on — work, reading, building, and exploring.',
    '/now'
);

export default function NowPage() {
    return (
        <PageContainer>
            <section className="w-full">
                <NowContent />
            </section>
        </PageContainer>
    );
}
