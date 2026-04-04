import PageContainer from '@/components/PageContainer';
import { createMetadata } from '@/lib/metadata';
import StackContent from '@/content/pages/stack.mdx';

export const metadata = createMetadata(
    'My stack',
    'The tools and technologies I default to when building software systems — from TypeScript and Next.js to Terraform and AWS.',
    '/stack'
);

export default function StackPage() {
    return (
        <PageContainer>
            <section data-testid="stack-intro" className="text-xl leading-6">
                <StackContent />
            </section>
        </PageContainer>
    );
}
