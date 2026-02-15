import React from 'react';
import Image from 'next/image';
import Layout from '../../components/Layout/Layout';
import Link from 'next/link';
import aboutPagePhoto from '../../public/images/about.jpeg';
import { PageHeader } from 'components/ui';

export default function About(): React.ReactElement {
    return (
        <Layout pageTitle="About">
            <section className="max-w-3xl mt-8 text-xl leading-6">
                <PageHeader title="About" />
                <p className="mt-6 text-xl font-medium text-gray-900">
                    Software Engineer • Coffee Lover • Traveler
                </p>
                <div className="md:flex-row container flex flex-col items-center pt-10 pb-24 mx-auto">
                    <div
                        data-testid="about-intro"
                        className="lg:grow md:w-1/2 lg:pr-10 md:pr-14 md:items-start md:mb-0 flex flex-col items-center mb-16">
                        <p className="mb-8 leading-relaxed">
                            I’m Pablo — a software engineer, coffee lover, and part time traveler
                            driven by a desire to grow into a well-rounded person and contribute, in
                            my own way, to making the world a little better.
                        </p>
                        <p className="leading-relaxed">
                            This is my small corner of the internet where I share thoughts and ideas
                            on software engineering, health, and personal finance, all fueled by my
                            curiosity and passion for continuous learning and self-development.
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
                    <div className="mb-10">
                        <h2 className="text-3xl font-semibold text-gray-900 sm:text-4xl mb-4">
                            Being lucky
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
                        After spending countless hours studying, I realized how lucky I was to be
                        learning something I truly enjoyed—especially knowing it opened doors to
                        exciting career opportunities.
                    </p>
                    <p className="pb-10 leading-relaxed">
                        {' '}
                        Along the way, I realized that learning doesn’t stop after graduation; it’s
                        a lifelong commitment. That realization inspired me to focus on improving
                        how I learn and grow—diving into personal knowledge management, productivity
                        systems, and the philosophy of continuous improvement inspired by{' '}
                        <a
                            href="https://www.kaizen.com/what-is-kaizen"
                            target="_blank"
                            className="text-emerald-500 hover:text-emerald-600 font-medium"
                            rel="noopener noreferrer">
                            kaizen
                        </a>
                        .
                    </p>
                    <div className="mb-10">
                        <h2 className="text-3xl font-semibold text-gray-900 sm:text-4xl mb-4">
                            Now
                        </h2>
                    </div>
                    <p className="pb-10 leading-relaxed">
                        As of 2026, I am based in sunny Barcelona, Spain where I enjoy spending time{' '}
                        <Link
                            href="/reading"
                            className="text-emerald-500 hover:text-emerald-600 font-medium"
                            rel="noopener noreferrer">
                            reading
                        </Link>{' '}
                        in specialty coffee shops,{' '}
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
                    <p className="leading-relaxed">
                        After working in tech for over 10 years, I am currently focused on building
                        decentralized data systems and empowering high-performing teams at
                        Thoughtworks. You can see some of my work{' '}
                        <Link
                            href="/working"
                            className="text-emerald-500 hover:text-emerald-600 font-medium"
                            rel="noopener noreferrer">
                            here
                        </Link>
                        .
                    </p>
                </section>
                <section className="w-full mt-20">
                    <div className="mt-10 mb-10">
                        <h2 className="text-3xl font-semibold text-gray-900 sm:text-4xl mb-4">
                            Let&apos;s get in touch!
                        </h2>
                    </div>
                    <p className="pb-10 leading-relaxed">
                        Feel free to reach out if you think I can help you, you want us to work on
                        something together or just to simple say hi.
                    </p>
                    <p className="pb-10 leading-relaxed">
                        You can find me on{' '}
                        <a
                            href="https://linkedin.com/in/pabloportoveloso"
                            target="_blank"
                            className="text-emerald-500 hover:text-emerald-600 font-medium"
                            rel="noopener noreferrer">
                            LinkedIn
                        </a>{' '}
                        where I share things mostly related with my work and on{' '}
                        <a
                            href="https://www.instagram.com/porto.vga/"
                            target="_blank"
                            className="text-emerald-500 hover:text-emerald-600 font-medium"
                            rel="noopener noreferrer">
                            Instagram
                        </a>{' '}
                        where I share my favourite photos from my travels.
                    </p>
                </section>
            </section>
        </Layout>
    );
}
