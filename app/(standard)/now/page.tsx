import { parseISO, format } from 'date-fns';
import Image from 'next/image';
import Link from 'next/link';
import { PageHeader } from '@/components/ui';
import { NowEntry } from '@/components/NowEntry';
import { createMetadata } from '@/lib/metadata';
import { getPostData, getSortedPostsData } from '@/lib/posts';

export const metadata = createMetadata(
    'Now',
    'What I am currently focused on — work, reading, building, and exploring.',
    '/now'
);

export default async function NowPage() {
    const lifeUpdates = getSortedPostsData().filter((post) => post.tag === 'life-updates');
    const entries = await Promise.all(
        lifeUpdates.map(async (post) => {
            const postData = await getPostData(post.id);
            const image = postData.image
                ? (await import(`@/public/images/${postData.image}`)).default
                : undefined;
            return { postData, image };
        })
    );

    return (
        <>
            <PageHeader title="Now" />
            <div className="mt-2 text-lg text-muted-foreground">
                What I&apos;m up to these days.
            </div>

            <div className="mt-10">
                {entries.map(({ postData, image }, index) => (
                    <NowEntry
                        key={postData.id}
                        date={format(parseISO(postData.date), 'LLLL yyyy')}
                        collapsible={index !== 0}
                        image={
                            image ? (
                                <Image
                                    src={image}
                                    alt={postData.imageAlt ?? ''}
                                    className="rounded w-full h-auto"
                                    placeholder="blur"
                                    sizes="100vw"
                                />
                            ) : undefined
                        }>
                        <postData.Content />
                    </NowEntry>
                ))}
            </div>

            <div className="mt-16 text-sm text-muted-foreground max-w-3xl">
                Inspired by{' '}
                <Link
                    href="https://nownownow.com/about"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-link">
                    Derek Sivers&apos; idea.
                </Link>
            </div>
        </>
    );
}
