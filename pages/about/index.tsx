import Image from 'next/image';
import Layout from '../../components/Layout/Layout';
import Link from 'next/link';
import aboutPagePhoto from '../../public/images/about.jpeg';
import { PageHeader } from 'components/ui';

export default function About(): JSX.Element {
    return (
        <Layout pageTitle="About">
            <section className="sm:text-2xl mt-8 text-xl leading-6">
                <PageHeader title="About" />
                <h1 className="title-font sm:text-4xl mt-16 text-3xl font-medium text-gray-900">
                    Software Engineer • Technical lead • Traveler
                </h1>
                <div className="md:flex-row container flex flex-col items-center pt-10 pb-24 mx-auto">
                    <div
                        data-testid="about-intro"
                        className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-14 md:items-start md:mb-0 flex flex-col items-center mb-16">
                        <p className="mb-8 leading-relaxed">
                            I am Pablo, a sofware engineer, amateur cyclist and traveler with a
                            passion to become a well-rounded person helping the world to be a better
                            place.
                        </p>
                        <p className="leading-relaxed">
                            This is my humble space on the internet where I share ideas on software
                            engineering, health and personal finance drived by my curiosity for
                            learning and self-development
                        </p>
                    </div>
                    <div className="lg:max-w-lg lg:w-3/6 md:w-3/6 w-full">
                        <Image
                            priority
                            alt="Me chilling in Sri Lanka"
                            src={aboutPagePhoto}
                            className="h-auto max-w-full rounded"
                            placeholder="blur"
                        />
                    </div>
                </div>
                <section className="w-full">
                    <div className="mb-10 text-center">
                        <h2 className="title-font sm:text-4xl mb-4 text-3xl font-medium text-gray-900">
                            What I like
                        </h2>
                    </div>
                    <p className="pb-10 leading-relaxed">
                        As a kid, I loved tinkering with computers and surfing the web. I spent
                        quite a lot of time building websites for my hobbies in the early days of
                        the Web 2.0 and assembling personal computers from scratch. All these
                        passions led me to pursue an education in something related to computers. I
                        end up studying a{' '}
                        <a
                            href="https://www.usc.gal/en/studies/degrees/engineering-and-architecture/computer-science-degree"
                            target="_blank"
                            className="text-emerald-500 hover:text-emerald-600 font-medium"
                            rel="noopener noreferrer">
                            BSC in Computer Science
                        </a>{' '}
                        at the University of Santiago and later on a{' '}
                        <a
                            href="https://www.scss.tcd.ie/personnel/networks-and-distributed-systems.php"
                            target="_blank"
                            className="text-emerald-500 hover:text-emerald-600 font-medium"
                            rel="noopener noreferrer">
                            MSC in Networks & Distributed Systems
                        </a>{' '}
                        at Trinity College, Dublin.
                    </p>
                    <p className="pb-10 leading-relaxed">
                        While spending hours and hours studying, I realized how lucky I was of
                        spending time learning something I was passionate about and with great
                        career possibilities. I also began to understand that I will have to keep
                        learning all my life which motivated me to spend time getting better with
                        personal knowledge management, productivity, and all things related to{' '}
                        <a
                            href="https://www.kaizen.com/what-is-kaizen"
                            target="_blank"
                            className="text-emerald-500 hover:text-emerald-600 font-medium"
                            rel="noopener noreferrer">
                            kaizen
                        </a>
                        .
                    </p>
                    <p className="pb-10 leading-relaxed">
                        As of 2023, I am based in Barcelona, Spain. In my spare time, I enjoy{' '}
                        <Link
                            href="/traveling"
                            className="text-emerald-500 hover:text-emerald-600 font-medium"
                            rel="noopener noreferrer">
                            traveling
                        </Link>{' '}
                        for both work and fun, playing and watching sports (I am a big F1 fan), and{' '}
                        <Link
                            href="/making"
                            className="text-emerald-500 hover:text-emerald-600 font-medium"
                            rel="noopener noreferrer">
                            building things on the internet
                        </Link>
                        .
                    </p>
                </section>
                <section className="w-full leading-relaxed">
                    <div className="mt-10 mb-10 text-center">
                        <h2 className="title-font sm:text-4xl mb-4 text-3xl font-medium text-gray-900">
                            What I do
                        </h2>
                    </div>
                    <p className="pb-10">
                        During my career, I have taken multiple roles, from full-stack software
                        engineer to other roles like infrastructure and data engineer delivering
                        many products in multiple sectors from retail to healthcare, travel, and
                        others. I have been working in digital products and digital platforms for
                        close to a decade.
                    </p>
                    <ul className="pl-15 xl:w-11/12 px-10 pb-10 space-y-5 list-disc">
                        <li>
                            I help companies build software and data systems right with modern
                            software and data engineering tools and practices.
                        </li>
                        <li>
                            I work with product and business people to incrementally design easy to
                            use products that address complex customer problems.
                        </li>
                        <li>
                            I bring software engineering and platform thinking to help teams adopt
                            and scale effective software engineering practices.
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
                            and multi-disciplinary product and platform teams.
                        </li>
                        <li>
                            I train, coach, and mentor people on modern software delivery practices,
                            agile/lean ways of working, and technical leadership.
                        </li>
                        <li>
                            Finally, I write and{' '}
                            <Link
                                href="/blog"
                                className="text-emerald-500 hover:text-emerald-600 font-medium"
                                rel="noopener noreferrer">
                                share what I learn and build in public
                            </Link>
                            .
                        </li>
                    </ul>
                    <p className="pb-10 leading-relaxed">
                        Currently, I work as Lead Software Consultant at{' '}
                        <a
                            href="https://thoughtworks.com"
                            target="_blank"
                            className="text-emerald-500 hover:text-emerald-600 font-medium"
                            rel="noopener noreferrer">
                            Thoughtworks
                        </a>{' '}
                        where I lead high-performing delivery teams building data and digital
                        products for our clients.
                    </p>
                </section>
                <section className="w-full">
                    <div className="container px-5 mx-auto mb-20">
                        <div className="mt-10 mb-10 text-center">
                            <h2 className="title-font sm:text-4xl mb-4 text-3xl font-medium text-gray-900">
                                How I do it
                            </h2>
                            <p className="xl:w-2/4 lg:w-3/4 mx-auto leading-relaxed">
                                The software engineering principles and practices that drive my
                                work.
                            </p>
                        </div>
                        <div className="sm:mx-auto sm:mb-20 flex flex-wrap -mx-2 text-xl">
                            <div className="sm:w-1/2 w-full p-2">
                                <div className="flex items-center h-full p-4 bg-gray-100 rounded">
                                    <svg
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="3"
                                        className="flex-shrink-0 w-6 h-6 mr-4 text-green-500"
                                        viewBox="0 0 24 24">
                                        <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                        <path d="M22 4L12 14.01l-3-3"></path>
                                    </svg>
                                    <span className="title-font font-medium">TDD</span>
                                </div>
                            </div>
                            <div className="sm:w-1/2 w-full p-2">
                                <div className="flex items-center h-full p-4 bg-gray-100 rounded">
                                    <svg
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="3"
                                        className="flex-shrink-0 w-6 h-6 mr-4 text-green-500"
                                        viewBox="0 0 24 24">
                                        <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                        <path d="M22 4L12 14.01l-3-3"></path>
                                    </svg>
                                    <span className="title-font font-medium">Pair programming</span>
                                </div>
                            </div>
                            <div className="sm:w-1/2 w-full p-2">
                                <div className="flex items-center h-full p-4 bg-gray-100 rounded">
                                    <svg
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="3"
                                        className="flex-shrink-0 w-6 h-6 mr-4 text-green-500"
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
                                <div className="flex items-center h-full p-4 bg-gray-100 rounded">
                                    <svg
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="3"
                                        className="flex-shrink-0 w-6 h-6 mr-4 text-green-500"
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
                                <div className="flex items-center h-full p-4 bg-gray-100 rounded">
                                    <svg
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="3"
                                        className="flex-shrink-0 w-6 h-6 mr-4 text-green-500"
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
                                <div className="flex items-center h-full p-4 bg-gray-100 rounded">
                                    <svg
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="3"
                                        className="flex-shrink-0 w-6 h-6 mr-4 text-green-500"
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
                                <div className="flex items-center h-full p-4 bg-gray-100 rounded">
                                    <svg
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="3"
                                        className="flex-shrink-0 w-6 h-6 mr-4 text-green-500"
                                        viewBox="0 0 24 24">
                                        <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                        <path d="M22 4L12 14.01l-3-3"></path>
                                    </svg>
                                    <span className="title-font font-medium">Agile and Lean</span>
                                </div>
                            </div>
                            <div className="sm:w-1/2 w-full p-2">
                                <div className="flex items-center h-full p-4 bg-gray-100 rounded">
                                    <svg
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="3"
                                        className="flex-shrink-0 w-6 h-6 mr-4 text-green-500"
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
                                <div className="flex items-center h-full p-4 bg-gray-100 rounded">
                                    <svg
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="3"
                                        className="flex-shrink-0 w-6 h-6 mr-4 text-green-500"
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
                                <div className="flex items-center h-full p-4 bg-gray-100 rounded">
                                    <svg
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="3"
                                        className="flex-shrink-0 w-6 h-6 mr-4 text-green-500"
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
                                <div className="flex items-center h-full p-4 bg-gray-100 rounded">
                                    <svg
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="3"
                                        className="flex-shrink-0 w-6 h-6 mr-4 text-green-500"
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
                                <div className="flex items-center h-full p-4 bg-gray-100 rounded">
                                    <svg
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="3"
                                        className="flex-shrink-0 w-6 h-6 mr-4 text-green-500"
                                        viewBox="0 0 24 24">
                                        <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                        <path d="M22 4L12 14.01l-3-3"></path>
                                    </svg>
                                    <span className="title-font font-medium">Clean code</span>
                                </div>
                            </div>
                            <div className="sm:w-1/2 w-full p-2">
                                <div className="flex items-center h-full p-4 bg-gray-100 rounded">
                                    <svg
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="3"
                                        className="flex-shrink-0 w-6 h-6 mr-4 text-green-500"
                                        viewBox="0 0 24 24">
                                        <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                        <path d="M22 4L12 14.01l-3-3"></path>
                                    </svg>
                                    <span className="title-font font-medium">Refactoring</span>
                                </div>
                            </div>
                            <div className="sm:w-1/2 w-full p-2">
                                <div className="flex items-center h-full p-4 bg-gray-100 rounded">
                                    <svg
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="3"
                                        className="flex-shrink-0 w-6 h-6 mr-4 text-green-500"
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
                    <div className="container mx-auto">
                        <div className="mt-10 mb-10 text-center">
                            <h2 className="title-font sm:text-4xl mb-4 text-3xl font-medium text-gray-900">
                                Talks
                            </h2>
                            <p className="xl:w-2/4 lg:w-3/4 mx-auto">
                                I like to share and teach what I learn. These are some talks I did.
                            </p>
                        </div>
                        <div className="w-full px-5">
                            <ul className="px-10 space-y-5 list-disc">
                                <li>
                                    2022 - Learning continous delivery with examples - @Factoria5
                                    bootcamp
                                </li>
                                <li>
                                    2022 - A data project post-mortem through Data Mesh lenses -
                                    @Thoughtworks
                                </li>
                                <li>
                                    2021 - Introduction to functional programming - @Factoria5
                                    bootcamp
                                </li>
                                <li>
                                    2020 - Improving observability with distributed tracing and
                                    Zipkin - @Client
                                </li>
                                <li>
                                    2020 - Improving observability with distributed tracing and
                                    Zipkin - @Client
                                </li>
                                <li>
                                    2019 - Introducting to agile software development - @Factoria5
                                    bootcamp
                                </li>
                                <li>
                                    2018 - Design systems and UI component libraries with React and
                                    Storybook - @Thoughtworks
                                </li>
                                <li>
                                    2017 - How we built a component library to scale frontend
                                    development across multiple teams - @Client
                                </li>
                                <li>
                                    2016 - Introduction to the phoenix server pattern -
                                    @Thoughtworks
                                </li>
                                <li>
                                    2016 - Creating a living style-guide for ThoughtWorks.com -
                                    @Thoughtworks
                                </li>
                                <li>
                                    2016 - What are the different roles in Agile teams - @Meetup
                                </li>
                                <li>2015 - Securing web applications 101 - @Thoughtworks</li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section className="w-full mt-20">
                    <div className="mt-10 mb-10 text-center">
                        <h2 className="title-font sm:text-4xl mb-4 text-3xl font-medium text-gray-900">
                            Let&apos;s get in touch!
                        </h2>
                    </div>
                    <p className="pb-10 leading-relaxed">
                        Feel free to reach out if you think I can help you, you want us to work on
                        something together or just to simple say hi.
                    </p>
                    <p className="pb-10 leading-relaxed">
                        You can find me at{' '}
                        <a
                            href="https://twitter.com/portovep"
                            target="_blank"
                            className="text-emerald-500 hover:text-emerald-600 font-medium"
                            rel="noopener noreferrer">
                            Twitter
                        </a>{' '}
                        where I share things mostly related with my work but also on{' '}
                        <a
                            href="https://www.instagram.com/porto.vga/"
                            target="_blank"
                            className="text-emerald-500 hover:text-emerald-600 font-medium"
                            rel="noopener noreferrer">
                            Instagram
                        </a>{' '}
                        where I share my favourite pics from my travels.
                    </p>
                </section>
            </section>
        </Layout>
    );
}
