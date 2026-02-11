import React from 'react';
import Layout from '../components/Layout/Layout';
import Card from '../components/Card/Card';
import Link from 'next/link';
import Image from 'next/image';
import profilePic from '../public/images/profile.png';

export default function Home(): React.ReactElement {
    return (
        <Layout home>
            <div className="md:mt-10 mt-14 flex flex-col items-center">
                <Link href="/about">
                    <Image
                        priority
                        quality="75"
                        src={profilePic}
                        className="hover:cursor-pointer h-auto max-w-full rounded-full"
                        height={144}
                        width={144}
                        alt="Profile picture"
                    />
                </Link>
            </div>
            <div data-testid="home-intro" className="pt-6 text-xl leading-6">
                <div className="max-w-2xl px-6 mx-auto text-center">
                    <h2 className="sm:text-5xl md:text-6xl text-3xl font-bold tracking-tighter">
                        Hi,{' '}
                        <span className="text-emerald-500 pl-1 font-bold rounded">
                            I&apos;m Pablo
                        </span>
                        . Nice to meet you.
                    </h2>
                    <p className="mt-7 text-slate-700 sm:text-xl sm:leading-8 leading-normal">
                        I help engineering leaders build scalable and efficient systems while
                        empowering their teams. More&nbsp;
                        <Link
                            href="/about"
                            className="text-emerald-500 hover:text-emerald-600 font-medium"
                            rel="noopener noreferrer">
                            about me
                        </Link>
                        .
                    </p>
                </div>
            </div>

            <div className="flex flex-col items-center justify-center mt-10">
                <div className="md:max-w-4xl md:flex-row flex flex-col flex-wrap items-stretch md:justify-center justify-center max-w-full mx-auto px-6">
                    <Card
                        title="Writing"
                        description="A collection of half-baked articles, research, and other written stuff."
                        linkURL="/blog"
                    />
                    <Card
                        title="Reading"
                        description="The books that shaped my thinking."
                        linkURL="/reading"
                    />
                    <Card
                        title="Speaking"
                        description="Talks and speaking engagements on software engineering."
                        linkURL="/speaking"
                    />
                    <Card
                        title="Working"
                        description="My experience as a software engineer."
                        linkURL="/working"
                    />
                    <Card
                        title="Traveling"
                        description="Some of my favourite travel destinations and photos."
                        linkURL="/traveling"
                    />
                    <Card
                        title="Making"
                        description="Some of the things I built on the side."
                        linkURL="/making"
                    />
                </div>
            </div>
        </Layout>
    );
}
