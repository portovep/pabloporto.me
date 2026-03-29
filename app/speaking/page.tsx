import { getSortedTalks } from '@/lib/talks';
import TalkCard from '@/components/TalkCard';
import PageContainer from '@/components/PageContainer';
import PageHeader from '@/components/ui/PageHeader/PageHeader';
import { createMetadata } from '@/lib/metadata';

export const metadata = createMetadata(
    'Speaking',
    'Talks and speaking engagements I have given on software engineering, data engineering, and agile practices.',
    '/speaking'
);

export default async function SpeakingPage() {
    const talks = await getSortedTalks();

    return (
        <PageContainer>
            <div className="space-y-8 mb-8">
                <div className="space-y-4" data-testid="speaking-intro">
                    <PageHeader title="Speaking">
                        I like to share and teach what I learn. These are some talks I have given at
                        conferences, meetups, and bootcamps.
                    </PageHeader>
                </div>

                <div className="space-y-6">
                    {talks.length > 0 ? (
                        talks.map((talk) => <TalkCard key={talk.id} talk={talk} />)
                    ) : (
                        <p className="text-muted-foreground">No talks found.</p>
                    )}
                </div>
            </div>
        </PageContainer>
    );
}
