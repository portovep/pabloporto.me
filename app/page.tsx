import Card from '@/components/Card';
import Link from 'next/link';
import Image from 'next/image';
import profilePic from '@/public/images/profile.png';

export default function HomePage() {
    return (
        <>
            <div className="md:mt-10 mt-14 flex flex-col items-center">
                <Link href="/about">
                    <Image
                        priority
                        quality={75}
                        src={profilePic}
                        className="hover:cursor-pointer h-auto max-w-full rounded-full"
                        height={144}
                        width={144}
                        alt="Profile picture"
                    />
                </Link>
            </div>
            <div data-testid="home-intro" className="pt-10 text-xl leading-6">
                <div className="max-w-2xl mx-auto text-center px-8 sm:px-0">
                    <h2 className="sm:text-5xl md:text-6xl text-3xl font-bold tracking-tighter">
                        Hi,{' '}
                        <span className="text-emerald-500 pl-1 font-bold rounded">
                            I&apos;m Pablo
                        </span>
                        .<br />
                        Nice to meet you.
                    </h2>
                    <p className="mt-7 text-muted-foreground sm:text-xl sm:leading-8 leading-normal">
                        Engineer by craft, explorer by heart. I help engineering leaders build
                        scalable software systems and bring their teams along for the ride.
                        More&nbsp;
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

            <div className="flex flex-col items-center justify-center mt-10 px-8 sm:px-0">
                <div className="md:max-w-4xl md:flex-row flex flex-col flex-wrap items-stretch md:justify-center justify-center max-w-full mx-auto gap-4">
                    <Card
                        title="Writing"
                        description="Articles and notes on software engineering and beyond."
                        linkURL="/blog"
                    />
                    <Card
                        title="Reading"
                        description="The books that shaped my thinking."
                        linkURL="/reading"
                    />
                    <Card
                        title="Speaking"
                        description="Talks given at conferences, meetups and bootcamps."
                        linkURL="/speaking"
                    />
                    <Card
                        title="Working"
                        description="My experience building software and leading engineering teams."
                        linkURL="/working"
                    />
                    <Card
                        title="Traveling"
                        description="Some of my favourite travel destinations and photos."
                        linkURL="/traveling"
                    />
                    <Card
                        title="Making"
                        description="Some of the things I built just for fun."
                        linkURL="/making"
                    />
                </div>
            </div>
        </>
    );
}
