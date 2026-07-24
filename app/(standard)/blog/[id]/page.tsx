import { Metadata } from 'next';
import Image from 'next/image';
import { createMetadata } from '@/lib/metadata';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { getAllPostIds, getPostData } from '@/lib/posts';
import { Date } from '@/components/ui';
import { Badge } from '@/components/ui/badge';
import { formatTagLabel } from '@/lib/content-types';
import PostRecommendations from '@/components/PostRecommendations';
import JsonLd from '@/components/JsonLd';
import { buildBlogPostingSchema } from '@/lib/structured-data';
import { toIsoDate } from '@/lib/dates';
import profilePic from '@/public/images/profile.webp';

export async function generateStaticParams() {
    const paths = getAllPostIds();
    return paths.map(({ params }) => ({ id: params.id }));
}

export async function generateMetadata({
    params
}: {
    params: Promise<{ id: string }>;
}): Promise<Metadata> {
    const { id } = await params;
    const postData = await getPostData(id);
    return createMetadata(postData.title, postData.description ?? postData.title, `/blog/${id}`, {
        canonicalUrl: postData.canonicalUrl,
        type: 'article',
        publishedTime: toIsoDate(postData.date),
        eyebrow: 'Pablo Porto · Blog'
    });
}

export default async function PostPage(props: { params: Promise<{ id: string }> }) {
    const { id } = await props.params;
    const postData = await getPostData(id);
    const heroImage = postData.image
        ? (await import(`@/public/images/${postData.image}`)).default
        : undefined;

    return (
        <>
            <JsonLd
                data={buildBlogPostingSchema({
                    id,
                    title: postData.title,
                    description: postData.description ?? postData.title,
                    datePublished: postData.date,
                    image: postData.image
                })}
            />
            <Link
                href="/blog"
                className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8">
                <ArrowLeft className="h-4 w-4" />
                See all posts
            </Link>
            <article className="md:px-10">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <Image
                            priority
                            quality={75}
                            src={profilePic}
                            className="h-9 w-9 rounded-full object-cover"
                            height={36}
                            width={36}
                            alt="Pablo Porto"
                        />
                        <span className="font-light text-muted-foreground">
                            <Date dateString={postData.date} />
                        </span>
                    </div>
                    <Badge variant="accent">{formatTagLabel(postData.tag)}</Badge>
                </div>
                <div className="mt-9">
                    {postData.draft && (
                        <div
                            className="flex p-4 mt-4 mb-8 text-foreground bg-muted rounded-lg"
                            role="alert">
                            <svg
                                aria-hidden="true"
                                className="shrink-0 inline w-5 h-5 mr-3"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    fillRule="evenodd"
                                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                                    clipRule="evenodd"></path>
                            </svg>
                            <span className="sr-only">Info</span>
                            <div>
                                This post is in draft state and may contain typos and missing
                                sections. I will keep editing it until is ready.
                            </div>
                        </div>
                    )}
                    <h2 className="font-heading md:text-5xl text-4xl font-extrabold tracking-tight text-foreground">
                        {postData.title}
                    </h2>
                    {heroImage && (
                        <Image
                            src={heroImage}
                            alt={postData.imageAlt ?? ''}
                            className="rounded w-full h-auto mt-8"
                            placeholder="blur"
                            sizes="(max-width: 1024px) 100vw, 1024px"
                        />
                    )}
                    <div className="prose prose-lg lg:prose-xl mt-10 dark:prose-invert">
                        <postData.Content />
                    </div>
                </div>
            </article>
            <PostRecommendations currentId={id} tag={postData.tag} />
            <div className="flex justify-start mt-12 mb-8">
                <Link
                    href="/blog"
                    className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors">
                    <ArrowLeft className="h-4 w-4" />
                    See all posts
                </Link>
            </div>
        </>
    );
}
