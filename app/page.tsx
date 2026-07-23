import Card from '@/components/Card';
import Link from 'next/link';
import Image from 'next/image';
import profilePic from '@/public/images/profile.webp';
import { sections } from '@/lib/navigation';

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
                        I lead engineering teams and build systems that put data to work with AI.
                        Outside of that, I&apos;m chasing freedom mostly through{' '}
                        <Link href="/traveling" className="text-link">
                            travel
                        </Link>
                        ,{' '}
                        <Link href="/traveling#photography" className="text-link">
                            capturing memories
                        </Link>
                        , and{' '}
                        <Link href="/blog" className="text-link">
                            writing down things
                        </Link>
                        .
                    </p>
                </div>
            </div>

            <div className="flex flex-col items-center justify-center mt-10 px-8 sm:px-0">
                <div className="md:max-w-4xl md:flex-row flex flex-col flex-wrap items-stretch md:justify-center justify-center max-w-full mx-auto gap-4">
                    {sections.map((section) => (
                        <Card
                            key={section.href}
                            title={section.label}
                            description={section.description}
                            linkURL={section.href}
                        />
                    ))}
                </div>
            </div>
        </>
    );
}
