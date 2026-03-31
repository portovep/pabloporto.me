import { Metadata } from 'next';
import Image from 'next/image';
import { createMetadata } from '@/lib/metadata';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import PageContainer from '@/components/PageContainer';
import PostBody from '@/components/PostBody';
import { getAllPostIds, getPostData } from '@/lib/posts';
import { Date } from '@/components/ui';
import { Badge } from '@/components/ui/badge';
import profilePic from '@/public/images/profile.png';

export async function generateStaticParams() {
    const paths = await getAllPostIds();
    return paths.map(({ params }) => ({ id: params.id }));
}

export async function generateMetadata({
    params
}: {
    params: Promise<{ id: string }>;
}): Promise<Metadata> {
    const { id } = await params;
    const postData = await getPostData(id);
    return createMetadata(postData.title, postData.title, `/blog/${id}`);
}

export default async function PostPage(props: { params: Promise<{ id: string }> }) {
    const { id } = await props.params;
    const postData = await getPostData(id);

    return (
        <PageContainer>
            <Link
                href="/blog"
                className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8">
                <ArrowLeft className="h-4 w-4" />
                See all posts
            </Link>
            <div className="md:-mb-10 flex justify-around -mb-10">
                <span className="relative inline-flex">
                    <Image
                        priority
                        quality={100}
                        src={profilePic}
                        className="h-auto max-w-full rounded-full"
                        height={108}
                        width={108}
                        alt={'Author photo'}
                    />
                </span>
            </div>
            <article className="md:px-10 max-w-5xl pt-20">
                <div className="flex items-center justify-between">
                    <span className="font-light text-muted-foreground">
                        <Date dateString={postData.date} />
                    </span>
                    <Badge className="bg-emerald-500 text-white hover:bg-emerald-600">
                        {postData.tag || 'Random'}
                    </Badge>
                </div>
                <div className="mt-9">
                    {postData.tag === 'Draft' && (
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
                    <h2 className="md:text-5xl text-4xl font-bold text-foreground">
                        {postData.title}
                    </h2>
                    <PostBody contentHtml={postData.contentHtml ?? ''} />
                </div>
            </article>
            <div className="flex justify-center mt-12 mb-8">
                <Link
                    href="/blog"
                    className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors">
                    <ArrowLeft className="h-4 w-4" />
                    See all posts
                </Link>
            </div>
        </PageContainer>
    );
}
