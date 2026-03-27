import { Metadata } from 'next';
import { getSortedTalks } from '@/lib/talks';
import TalkCard from '@/components/TalkCard';
import PageContainer from '@/components/PageContainer';
import PageHeader from '@/components/ui/PageHeader/PageHeader';

export const metadata: Metadata = {
    title: 'Speaking',
    description:
        'Talks and speaking engagements I have given on software engineering, data engineering, and agile practices.',
    keywords: ['speaking', 'talks', 'conferences', 'presentations', 'software engineering'],
    alternates: {
        canonical: '/speaking'
    },
    openGraph: {
        title: 'Speaking',
        description:
            'Talks and speaking engagements I have given on software engineering, data engineering, and agile practices.',
        url: '/speaking'
    },
    twitter: {
        title: 'Speaking',
        description:
            'Talks and speaking engagements I have given on software engineering, data engineering, and agile practices.'
    }
};

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
