import { Metadata } from 'next';
import { getSortedTalks } from '@/lib/talks';
import TalkCard from '@/components/TalkCard/TalkCard';
import PageContainer from '@/components/PageContainer/PageContainer';
import PageHeader from '@/components/ui/PageHeader/PageHeader';

export const metadata: Metadata = {
    title: 'Speaking | Pablo Porto',
    description:
        'Talks and speaking engagements I have given on software engineering, data engineering, and agile practices.',
    keywords: ['speaking', 'talks', 'conferences', 'presentations', 'software engineering'],
    authors: [{ name: 'Pablo Porto' }],
    creator: 'Pablo Porto',
    publisher: 'Pablo Porto',
    formatDetection: {
        email: false,
        address: false,
        telephone: false
    },
    metadataBase: new URL('https://pabloporto.me'),
    alternates: {
        canonical: '/speaking'
    },
    openGraph: {
        title: 'Speaking | Pablo Porto',
        description:
            'Talks and speaking engagements I have given on software engineering, data engineering, and agile practices.',
        url: '/speaking',
        siteName: 'Pablo Porto',
        locale: 'en_US',
        type: 'website'
    },
    twitter: {
        card: 'summary',
        title: 'Speaking | Pablo Porto',
        description:
            'Talks and speaking engagements I have given on software engineering, data engineering, and agile practices.'
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1
        }
    }
};

export default async function SpeakingPage() {
    const talks = await getSortedTalks();

    return (
        <PageContainer>
            <div className="space-y-12 mb-12">
                <div className="space-y-4" data-testid="speaking-intro">
                    <PageHeader title="Speaking">
                        I like to share and teach what I learn. These are some talks I have given at
                        conferences, meetups, and bootcamps.
                    </PageHeader>
                </div>

                <div>
                    {talks.length > 0 ? (
                        talks.map((talk, index) => (
                            <div key={talk.id} className={index > 0 ? 'mt-6' : ''}>
                                <TalkCard talk={talk} />
                            </div>
                        ))
                    ) : (
                        <p className="text-gray-500">No talks found.</p>
                    )}
                </div>
            </div>
        </PageContainer>
    );
}
