import Link from 'next/link';
import PageContainer from '@/components/PageContainer';
import FilteredProjects from '@/components/FilteredProjects';
import { PageHeader } from '@/components/ui';
import { getSortedProjectData } from '@/lib/projects';
import { createMetadata } from '@/lib/metadata';

export const metadata = createMetadata(
    'At work',
    'Over 10 years helping startups and enterprises build scalable software systems and high-performing engineering teams.',
    '/working'
);

export default async function WorkingPage() {
    const allProjectData = await getSortedProjectData();

    return (
        <PageContainer>
            <section data-testid="working-intro" className="text-xl leading-6">
                <PageHeader title="At work" />
                <section className="w-full leading-relaxed mt-8 mb-10">
                    <p className="pb-6">
                        Hey 👋, I&apos;m Pablo. I&apos;ve worked in tech for over 10 years. I am
                        passionate about enabling teams to adopt effective software and data
                        engineering practices and helping other engineers build a sustainable but
                        effective career in tech.
                    </p>
                    <p className="pb-6">
                        Over the years, I have helped startups build MVPs fast, scale-ups improve
                        their software engineering practices to achieve fast flow and stability, and
                        large enterprises scale by implementing decentralised architectures like
                        microservices and data mesh.
                    </p>
                    <p className="pb-6">
                        I&apos;ve also played a variety of roles, some of these include: full stack
                        engineer, infrastructure engineer, agile development trainer, data engineer
                        and tech lead.
                    </p>
                    <p className="pb-10 leading-relaxed">
                        Currently, I work as <strong>tech principal consultant</strong> at{' '}
                        <a
                            href="https://thoughtworks.com"
                            target="_blank"
                            className="text-emerald-500 hover:text-emerald-600 font-medium"
                            rel="noopener noreferrer">
                            Thoughtworks
                        </a>
                        , where I lead high-performing delivery teams building data and digital
                        products for our clients.
                    </p>
                </section>
                <section className="w-full leading-relaxed mt-8 mb-10">
                    <div className="mt-10 mb-6">
                        <h2 className="text-3xl font-semibold text-foreground sm:text-4xl mb-4">
                            What I do
                        </h2>
                    </div>
                    <ul className="pl-12 px-10 pb-10 space-y-5 list-disc">
                        <li>
                            I help companies build software and data systems right with modern
                            software and data engineering tools and practices.
                        </li>
                        <li>
                            I work with product and business people to incrementally design
                            easy-to-use digital products that solve complex customer problems.
                        </li>
                        <li>
                            I advise engineering and data directors to define tech and data
                            strategies that translate business needs into effective technical
                            roadmaps.
                        </li>
                        <li>
                            I bring software engineering, product and platform thinking to help
                            teams build the right product and platform for their customer needs.
                        </li>
                        <li>
                            I lead and build{' '}
                            <a
                                href="https://www.svpg.com/empowered-product-teams/"
                                target="_blank"
                                className="text-emerald-500 hover:text-emerald-600 font-medium"
                                rel="noopener noreferrer">
                                empowered
                            </a>{' '}
                            and multi-disciplinary product and platform teams, typically ranging
                            from 4-8 engineers, fostering autonomy and ownership.
                        </li>
                        <li>
                            I grow the next generation of technical leaders by training, coaching,
                            and mentoring people on modern software delivery practices, AI-enabled
                            software engineering and technical leadership.
                        </li>
                        <li>
                            I write and{' '}
                            <Link
                                href="/blog"
                                className="text-emerald-500 hover:text-emerald-600 font-medium"
                                rel="noopener noreferrer">
                                share what I learn and build in public
                            </Link>
                            , contributing to the broader engineering community.
                        </li>
                    </ul>
                </section>
                <section className="w-full">
                    <div className="container mx-auto mb-20">
                        <div className="mt-10 mb-10">
                            <h2 className="text-3xl font-semibold text-foreground sm:text-4xl mb-4">
                                Principles and practices
                            </h2>
                            <p className="leading-relaxed">
                                The software engineering principles and practices that drive my
                                work.
                            </p>
                        </div>
                        <div className="sm:mx-auto sm:mb-20 flex flex-wrap -mx-2 text-xl">
                            <div className="sm:w-1/2 w-full p-2">
                                <div className="flex items-center h-full p-4 bg-muted rounded">
                                    <svg
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="3"
                                        className="shrink-0 w-6 h-6 mr-4 text-green-500"
                                        viewBox="0 0 24 24">
                                        <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                        <path d="M22 4L12 14.01l-3-3"></path>
                                    </svg>
                                    <span className="title-font font-medium">TDD</span>
                                </div>
                            </div>
                            <div className="sm:w-1/2 w-full p-2">
                                <div className="flex items-center h-full p-4 bg-muted rounded">
                                    <svg
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="3"
                                        className="shrink-0 w-6 h-6 mr-4 text-green-500"
                                        viewBox="0 0 24 24">
                                        <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                        <path d="M22 4L12 14.01l-3-3"></path>
                                    </svg>
                                    <span className="title-font font-medium">Pair programming</span>
                                </div>
                            </div>
                            <div className="sm:w-1/2 w-full p-2">
                                <div className="flex items-center h-full p-4 bg-muted rounded">
                                    <svg
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="3"
                                        className="shrink-0 w-6 h-6 mr-4 text-green-500"
                                        viewBox="0 0 24 24">
                                        <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                        <path d="M22 4L12 14.01l-3-3"></path>
                                    </svg>
                                    <span className="title-font font-medium">
                                        Continuous delivery
                                    </span>
                                </div>
                            </div>
                            <div className="sm:w-1/2 w-full p-2">
                                <div className="flex items-center h-full p-4 bg-muted rounded">
                                    <svg
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="3"
                                        className="shrink-0 w-6 h-6 mr-4 text-green-500"
                                        viewBox="0 0 24 24">
                                        <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                        <path d="M22 4L12 14.01l-3-3"></path>
                                    </svg>
                                    <span className="title-font font-medium">
                                        Distributed systems architecture
                                    </span>
                                </div>
                            </div>
                            <div className="sm:w-1/2 w-full p-2">
                                <div className="flex items-center h-full p-4 bg-muted rounded">
                                    <svg
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="3"
                                        className="shrink-0 w-6 h-6 mr-4 text-green-500"
                                        viewBox="0 0 24 24">
                                        <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                        <path d="M22 4L12 14.01l-3-3"></path>
                                    </svg>
                                    <span className="title-font font-medium">
                                        Platform engineering
                                    </span>
                                </div>
                            </div>
                            <div className="sm:w-1/2 w-full p-2">
                                <div className="flex items-center h-full p-4 bg-muted rounded">
                                    <svg
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="3"
                                        className="shrink-0 w-6 h-6 mr-4 text-green-500"
                                        viewBox="0 0 24 24">
                                        <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                        <path d="M22 4L12 14.01l-3-3"></path>
                                    </svg>
                                    <span className="title-font font-medium">
                                        Technical leadership
                                    </span>
                                </div>
                            </div>
                            <div className="sm:w-1/2 w-full p-2">
                                <div className="flex items-center h-full p-4 bg-muted rounded">
                                    <svg
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="3"
                                        className="shrink-0 w-6 h-6 mr-4 text-green-500"
                                        viewBox="0 0 24 24">
                                        <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                        <path d="M22 4L12 14.01l-3-3"></path>
                                    </svg>
                                    <span className="title-font font-medium">Agile and Lean</span>
                                </div>
                            </div>
                            <div className="sm:w-1/2 w-full p-2">
                                <div className="flex items-center h-full p-4 bg-muted rounded">
                                    <svg
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="3"
                                        className="shrink-0 w-6 h-6 mr-4 text-green-500"
                                        viewBox="0 0 24 24">
                                        <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                        <path d="M22 4L12 14.01l-3-3"></path>
                                    </svg>
                                    <span className="title-font font-medium">
                                        Infrastructure as code
                                    </span>
                                </div>
                            </div>
                            <div className="sm:w-1/2 w-full p-2">
                                <div className="flex items-center h-full p-4 bg-muted rounded">
                                    <svg
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="3"
                                        className="shrink-0 w-6 h-6 mr-4 text-green-500"
                                        viewBox="0 0 24 24">
                                        <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                        <path d="M22 4L12 14.01l-3-3"></path>
                                    </svg>
                                    <span className="title-font font-medium">
                                        Trunk based development
                                    </span>
                                </div>
                            </div>
                            <div className="sm:w-1/2 w-full p-2">
                                <div className="flex items-center h-full p-4 bg-muted rounded">
                                    <svg
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="3"
                                        className="shrink-0 w-6 h-6 mr-4 text-green-500"
                                        viewBox="0 0 24 24">
                                        <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                        <path d="M22 4L12 14.01l-3-3"></path>
                                    </svg>
                                    <span className="title-font font-medium">
                                        Continuous improvement
                                    </span>
                                </div>
                            </div>
                            <div className="sm:w-1/2 w-full p-2">
                                <div className="flex items-center h-full p-4 bg-muted rounded">
                                    <svg
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="3"
                                        className="shrink-0 w-6 h-6 mr-4 text-green-500"
                                        viewBox="0 0 24 24">
                                        <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                        <path d="M22 4L12 14.01l-3-3"></path>
                                    </svg>
                                    <span className="title-font font-medium">
                                        Evolutionary architecture
                                    </span>
                                </div>
                            </div>
                            <div className="sm:w-1/2 w-full p-2">
                                <div className="flex items-center h-full p-4 bg-muted rounded">
                                    <svg
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="3"
                                        className="shrink-0 w-6 h-6 mr-4 text-green-500"
                                        viewBox="0 0 24 24">
                                        <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                        <path d="M22 4L12 14.01l-3-3"></path>
                                    </svg>
                                    <span className="title-font font-medium">Clean code</span>
                                </div>
                            </div>
                            <div className="sm:w-1/2 w-full p-2">
                                <div className="flex items-center h-full p-4 bg-muted rounded">
                                    <svg
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="3"
                                        className="shrink-0 w-6 h-6 mr-4 text-green-500"
                                        viewBox="0 0 24 24">
                                        <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                        <path d="M22 4L12 14.01l-3-3"></path>
                                    </svg>
                                    <span className="title-font font-medium">Refactoring</span>
                                </div>
                            </div>
                            <div className="sm:w-1/2 w-full p-2">
                                <div className="flex items-center h-full p-4 bg-muted rounded">
                                    <svg
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="3"
                                        className="shrink-0 w-6 h-6 mr-4 text-green-500"
                                        viewBox="0 0 24 24">
                                        <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                        <path d="M22 4L12 14.01l-3-3"></path>
                                    </svg>
                                    <span className="title-font font-medium">Empowered teams</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="w-full leading-relaxed">
                    <div className="mt-10 mb-10">
                        <h2 className="text-3xl font-semibold text-foreground sm:text-4xl mb-4">
                            Projects
                        </h2>
                        <p>
                            A selection of projects showcasing my experience across data
                            engineering, infrastructure engineering, and technical leadership. You
                            can also{' '}
                            <Link
                                href="/stack"
                                className="text-emerald-500 hover:text-emerald-600 font-medium"
                                rel="noopener noreferrer">
                                explore my preferred tools and technologies
                            </Link>
                            .
                        </p>
                    </div>
                    <FilteredProjects projects={allProjectData} />
                </section>
                <section className="w-full leading-relaxed mt-20">
                    <div className="mt-10 mb-10 py-10">
                        <h2 className="text-3xl font-semibold text-foreground sm:text-4xl mb-4">
                            Let&apos;s Connect
                        </h2>
                        <p className="text-muted-foreground mb-4">
                            I am always looking forward to meeting new people. If you want to
                            connect, you can find me on{' '}
                            <a
                                href="https://linkedin.com/in/pabloportoveloso"
                                target="_blank"
                                className="text-emerald-500 hover:text-emerald-600 font-medium"
                                rel="noopener noreferrer">
                                LinkedIn
                            </a>
                            ,{' '}
                            <a
                                href="https://github.com/portovep"
                                target="_blank"
                                className="text-emerald-500 hover:text-emerald-600 font-medium"
                                rel="noopener noreferrer">
                                Github
                            </a>
                            , or{' '}
                            <a
                                href="https://www.instagram.com/porto.vga"
                                target="_blank"
                                className="text-emerald-500 hover:text-emerald-600 font-medium"
                                rel="noopener noreferrer">
                                Instagram
                            </a>
                            .
                        </p>
                        <div className="flex justify-start gap-4">
                            <a
                                href="mailto:pablo@pabloporto.me"
                                className="px-6 py-3 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600">
                                Get in Touch
                            </a>
                            <Link
                                href="/blog"
                                className="px-6 py-3 border border-emerald-500 text-emerald-600 rounded-lg hover:bg-emerald-50">
                                Read My Blog
                            </Link>
                        </div>
                    </div>
                </section>
            </section>
        </PageContainer>
    );
}
