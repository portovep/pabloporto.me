import Image from 'next/image';
import Link from 'next/link';
import PageContainer from '@/components/PageContainer';
import { PageHeader } from '@/components/ui';
import { createMetadata } from '@/lib/metadata';
import GetInTouch from '@/components/GetInTouch';
import aboutPagePhoto from '@/public/images/about.jpeg';

export const metadata = createMetadata(
    'About',
    'Software engineer, coffee lover, and traveler based in Barcelona. Learn more about my background, work, and interests.',
    '/about'
);

export default function AboutPage() {
    const linkClass = 'text-emerald-500 hover:text-emerald-600 font-medium';

    return (
        <PageContainer>
            <section className="max-w-3xl text-xl leading-6">
                <PageHeader title="About" />
                <p className="mt-6 text-xl font-medium text-foreground">
                    Software Engineer · Part time traveler · Occasional photographer
                </p>
                <div className="md:flex-row container flex flex-col items-center pt-10 pb-10 md:pb-20 mx-auto">
                    <div
                        data-testid="about-intro"
                        className="lg:grow md:w-1/2 lg:pr-10 md:pr-14 md:items-start md:mb-0 flex flex-col items-center mb-16">
                        <p className="mb-6 leading-relaxed">
                            I&apos;m Pablo — I build distributed systems by day and spend the rest
                            of my time hunting down great coffee,{' '}
                            <Link href="/traveling" className={linkClass}>
                                exploring new corners of the world
                            </Link>
                            , and{' '}
                            <a
                                href="https://www.instagram.com/porto.vga/"
                                target="_blank"
                                className={linkClass}
                                rel="noopener noreferrer">
                                photographing what I find
                            </a>
                            .
                        </p>
                        <p className="leading-relaxed">
                            This is where I write about what I&apos;m learning: mostly software
                            engineering, but also the books I&apos;m reading, places I&apos;ve been,
                            and ideas I can&apos;t stop thinking about.
                        </p>
                    </div>
                    <div className="lg:max-w-lg lg:w-3/6 md:w-3/6 w-full">
                        <Image
                            priority
                            alt="Me chilling in Sri Lanka"
                            src={aboutPagePhoto}
                            className="h-auto max-w-full rounded"
                            placeholder="blur"
                            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                    </div>
                </div>
                <section className="w-full">
                    <h2 className="text-3xl font-semibold text-foreground sm:text-4xl mb-6">
                        Being lucky
                    </h2>
                    <p className="mb-6 leading-relaxed">
                        As a kid, I loved tinkering with computers and surfing the web. I spent
                        quite a lot of time building websites for my hobbies in the early days of
                        the Web 2.0 and assembling personal computers from scratch.
                    </p>
                    <p className="mb-6 leading-relaxed">
                        All these passions led me to pursue an education in something related to
                        computers. I ended up studying a{' '}
                        <a
                            href="https://www.usc.gal/en/studies/degrees/engineering-and-architecture/computer-science-degree"
                            target="_blank"
                            className={linkClass}
                            rel="noopener noreferrer">
                            BSC in Computer Science
                        </a>{' '}
                        at the University of Santiago and later on a{' '}
                        <a
                            href="https://www.scss.tcd.ie/personnel/networks-and-distributed-systems.php"
                            target="_blank"
                            className={linkClass}
                            rel="noopener noreferrer">
                            MSC in Networks & Distributed Systems
                        </a>{' '}
                        at Trinity College, Dublin.
                    </p>
                    <p className="mb-6 leading-relaxed">
                        After countless hours studying, I realized how lucky I was — I genuinely
                        loved it, and what I was learning let me build real things from scratch,
                        starting with just an idea.
                    </p>
                    <h2 className="text-3xl font-semibold text-foreground sm:text-4xl mb-6 mt-16">
                        Now
                    </h2>
                    <p className="mb-6 leading-relaxed">
                        As of 2026, I am based in sunny Barcelona, Spain where I enjoy spending time{' '}
                        <Link href="/reading" className={linkClass}>
                            reading
                        </Link>{' '}
                        in specialty coffee shops,{' '}
                        <Link href="/traveling" className={linkClass}>
                            exploring the world
                        </Link>{' '}
                        for both work and fun, playing and watching sports (I am a big snowboarding
                        and cycling fan), and{' '}
                        <Link href="/making" className={linkClass}>
                            building things on the internet
                        </Link>
                        .
                    </p>
                    <p className="leading-relaxed">
                        I work as Tech Principal Consultant at{' '}
                        <a
                            href="https://thoughtworks.com"
                            target="_blank"
                            className={linkClass}
                            rel="noopener noreferrer">
                            Thoughtworks
                        </a>
                        , where I lead high-performing software teams building decentralized data
                        systems and engineering platforms — helping our clients scale their systems
                        and ship better software. Check out some of{' '}
                        <Link href="/working" className={linkClass}>
                            my work experience
                        </Link>
                        .
                    </p>
                </section>
                <GetInTouch />
            </section>
        </PageContainer>
    );
}
