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
                <h1 className="title-font mt-6 text-3xl font-medium text-gray-900">
                    Software Engineer • Technical lead • Traveler
                </h1>
                <div className="md:flex-row container flex flex-col items-center pt-10 pb-24 mx-auto">
                    <div
                        data-testid="about-intro"
                        className="lg:grow md:w-1/2 lg:pr-10 md:pr-14 md:items-start md:mb-0 flex flex-col items-center mb-16">
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
