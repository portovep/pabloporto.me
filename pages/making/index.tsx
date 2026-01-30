import React from 'react';
import Image from 'next/image';
import Layout from '../../components/Layout/Layout';
import { PageHeader } from '../../components/ui';

import chromeStoreCTA from '../../public/images/projects/chrome_store.png';
import cloujeraScreenshot from '../../public/images/projects/cloujera_framed.png';
import ecoshifterScreenshot from '../../public/images/projects/ecoshifter.webp';
import crowdtransportScreenshot from '../../public/images/projects/media_crowdtransport_1.png';
import oneStreamScreenshot from '../../public/images/projects/1stream_screenshot.png';
import wanderpassScreenshot from '../../public/images/projects/wanderpass_screenshot.png';

export default function Making(): React.ReactElement {
    return (
        <Layout wide pageTitle="Making">
            <section data-testid="making-intro" className="body-font mt-10 text-gray-600">
                <PageHeader title="Making">
                    I love building things to learn new skills. These are some of the apps I made.
                </PageHeader>
                <div
                    data-testid="making-project"
                    className="pb-14 md:flex-row container flex flex-col items-center pt-10 mx-auto mt-10 mb-10 border-b border-gray-300">
                    <div className="md:order-first lg:grow md:w-1/2 lg:pr-24 md:pr-16 md:items-start md:text-left flex flex-col items-center order-last mb-0 text-center">
                        <div className="flex flex-col md:flex-row md:items-baseline md:gap-3 items-center mb-6 w-full md:w-auto">
                            <h1 className="title-font text-4xl font-medium text-gray-900">
                                Wanderpass
                            </h1>
                            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-600 mt-2 md:mt-0">
                                2024
                            </span>
                        </div>
                        <p className="mb-6 leading-relaxed text-gray-700">
                            Wanderpass lets you track your travels and collect digital passport
                            stamps for every country you visit.
                        </p>
                        <p className="mb-6 leading-relaxed text-gray-700">
                            Track your adventures on an interactive world map, collect digital
                            passport stamps for each country visited, and visualize your travel
                            statistics. Wanderpass also lets you discover travel buddies, see where
                            friends have been, and get inspired for future adventures.
                        </p>
                        <div className="flex justify-center mt-8">
                            <a
                                href="https://wanderpass.vercel.app"
                                target="_blank"
                                rel="noopener noreferrer">
                                <button className="bg-emerald-500 focus:outline-none hover:bg-emerald-600 inline-flex px-6 py-2 text-lg text-white border-0 rounded">
                                    <svg
                                        width="24"
                                        height="24"
                                        fill="currentColor"
                                        className="mr-3 text-purple-600 text-opacity-50 transform"
                                        viewBox="0 0 24 24">
                                        <path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"></path>
                                    </svg>
                                    Claim your Wanderpass
                                </button>
                            </a>
                        </div>
                    </div>
                    <div className="md:mb-0 lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-8">
                        <Image
                            priority
                            className="object-center rounded rounded-b-none"
                            alt="Wanderpass screenshot"
                            src={wanderpassScreenshot}
                            height="540"
                            width="900"
                            placeholder="blur"
                        />
                    </div>
                </div>
                <div
                    data-testid="making-project"
                    className="pb-14 md:flex-row container flex flex-col items-center pt-10 mx-auto mb-10 border-b border-gray-300">
                    <div className="md:order-first lg:grow md:w-1/2 lg:pr-24 md:pr-16 md:items-start md:text-left flex flex-col items-center order-last mb-0 text-center">
                        <div className="flex flex-col md:flex-row md:items-baseline md:gap-3 items-center mb-6 w-full md:w-auto">
                            <h1 className="title-font text-4xl font-medium text-gray-900">
                                1Stream
                            </h1>
                            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-600 mt-2 md:mt-0">
                                2020
                            </span>
                        </div>
                        <p className="mb-6 leading-relaxed text-gray-700">
                            1Stream allows you to watch Netflix or Youtube streams in sync remotely
                            with friends.
                        </p>
                        <p className="mb-6 leading-relaxed text-gray-700">
                            Watch Netflix or Youtube streams remotely with friends. 1Stream
                            synchronizes video playback between you and your friend so you can be
                            sure you&apos;re watching exactly the same frame at the same time.
                        </p>
                        <div className="flex justify-center mt-8">
                            <a href="https://github.com/portovep/1stream">
                                <button className="bg-emerald-500 focus:outline-none hover:bg-emerald-600 inline-flex px-6 py-2 text-lg text-white border-0 rounded">
                                    <svg
                                        width="24"
                                        height="24"
                                        fill="currentColor"
                                        className="mr-3 text-purple-600 text-opacity-50 transform">
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M12 2C6.477 2 2 6.463 2 11.97c0 4.404 2.865 8.14 6.839 9.458.5.092.682-.216.682-.48 0-.236-.008-.864-.013-1.695-2.782.602-3.369-1.337-3.369-1.337-.454-1.151-1.11-1.458-1.11-1.458-.908-.618.069-.606.069-.606 1.003.07 1.531 1.027 1.531 1.027.892 1.524 2.341 1.084 2.91.828.092-.643.35-1.083.636-1.332-2.22-.251-4.555-1.107-4.555-4.927 0-1.088.39-1.979 1.029-2.675-.103-.252-.446-1.266.098-2.638 0 0 .84-.268 2.75 1.022A9.606 9.606 0 0112 6.82c.85.004 1.705.114 2.504.336 1.909-1.29 2.747-1.022 2.747-1.022.546 1.372.202 2.386.1 2.638.64.696 1.028 1.587 1.028 2.675 0 3.83-2.339 4.673-4.566 4.92.359.307.678.915.678 1.846 0 1.332-.012 2.407-.012 2.734 0 .267.18.577.688.48C19.137 20.107 22 16.373 22 11.969 22 6.463 17.522 2 12 2z"></path>
                                    </svg>
                                    Fork me
                                </button>
                            </a>
                        </div>
                        <div className="hover:bg-gray-200 focus:outline-none flex items-center justify-center px-0 py-0 mt-4 bg-gray-100 rounded-lg">
                            <a href="https://chrome.google.com/webstore/detail/1stream/ckgaafkgiajiabimkgpgkiamnolncfkg">
                                <Image
                                    priority
                                    alt="chrome-store-link"
                                    src={chromeStoreCTA}
                                    height="60"
                                    width="225"
                                />
                            </a>
                        </div>
                    </div>
                    <div className="md:mb-0 lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-8">
                        <Image
                            priority
                            className="object-center rounded rounded-b-none"
                            alt="1Scream screenshoot"
                            src={oneStreamScreenshot}
                            height="540"
                            width="900"
                            placeholder="blur"
                        />
                    </div>
                </div>
                <div
                    data-testid="making-project"
                    className="pb-14 md:flex-row container flex flex-col items-center pt-10 mx-auto mb-10 border-b border-gray-300">
                    <div className="md:order-first lg:grow md:w-1/2 lg:pr-24 md:pr-16 md:items-start md:text-left flex flex-col items-center order-last mb-0 text-center">
                        <div className="flex flex-col md:flex-row md:items-baseline md:gap-3 items-center mb-6 w-full md:w-auto">
                            <h1 className="title-font text-4xl font-medium text-gray-900">
                                EcoShifter
                                <br className="inline-block" />
                                Personal Cloud
                            </h1>
                            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-600 mt-2 md:mt-0">
                                2015
                            </span>
                        </div>
                        <p className="mb-6 leading-relaxed text-gray-700">
                            Ecoshifter personal cloud allows app users to upload their car profiles
                            to the cloud and keep them synchronized between all their devices. I
                            developed this REST API for my friend&nbsp;
                            <a
                                className="text-emerald-500 hover:text-emerald-600 font-medium"
                                href="https://ivanc.uk">
                                Ivan&rsquo;s
                            </a>
                            &nbsp;smart driving Android app EcoShifter.
                        </p>
                        <p className="mb-6 leading-relaxed text-gray-700">
                            Users of older versions of EcoShifter had to create again the same
                            profiles for their cars each time they switch devices. Moreover, they
                            had to enter information like the make and model of the car manually.
                            The new API allows users to choose existing makes and models offered and
                            to save their car profiles on the cloud.
                        </p>
                        <div className="flex justify-center mt-8">
                            <a href="https://play.google.com/store/apps/details?id=com.ecoshifter.beta">
                                <button className="hover:bg-gray-200 focus:outline-none inline-flex items-center px-5 py-3 bg-gray-100 rounded-lg">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        className="w-6 h-6"
                                        viewBox="0 0 512 512">
                                        <path d="M99.617 8.057a50.191 50.191 0 00-38.815-6.713l230.932 230.933 74.846-74.846L99.617 8.057zM32.139 20.116c-6.441 8.563-10.148 19.077-10.148 30.199v411.358c0 11.123 3.708 21.636 10.148 30.199l235.877-235.877L32.139 20.116zM464.261 212.087l-67.266-37.637-81.544 81.544 81.548 81.548 67.273-37.64c16.117-9.03 25.738-25.442 25.738-43.908s-9.621-34.877-25.749-43.907zM291.733 279.711L60.815 510.629c3.786.891 7.639 1.371 11.492 1.371a50.275 50.275 0 0027.31-8.07l266.965-149.372-74.849-74.847z"></path>
                                    </svg>
                                    <span className="flex flex-col items-start ml-4 leading-none">
                                        <span className="mb-1 text-xs text-gray-600">
                                            GET IT ON
                                        </span>
                                        <span className="title-font font-medium">Google Play</span>
                                    </span>
                                </button>
                            </a>
                        </div>
                    </div>
                    <div className="md:mb-0 lg:max-w-lg lg:w-full md:w-1/2 flex justify-center w-5/6 mb-8">
                        <Image
                            className="object-cover object-center rounded"
                            alt="Ecoshifter screenshoot"
                            src={ecoshifterScreenshot}
                            height="500"
                            width="300"
                            placeholder="blur"
                        />
                    </div>
                </div>
                <div
                    data-testid="making-project"
                    className="pb-14 md:flex-row container flex flex-col items-center pt-10 mx-auto mb-10 border-b border-gray-300">
                    <div className="md:order-first lg:grow md:w-1/2 lg:pr-24 md:pr-16 md:items-start md:text-left flex flex-col items-center order-last mb-0 text-center">
                        <div className="flex flex-col md:flex-row md:items-baseline md:gap-3 items-center mb-6 w-full md:w-auto">
                            <h1 className="title-font text-4xl font-medium text-gray-900">
                                Cloujera
                            </h1>
                            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-600 mt-2 md:mt-0">
                                2014
                            </span>
                        </div>
                        <p className="mb-6 leading-relaxed text-gray-700">
                            Cloujera lets you do a fine-grained search for spoken words in
                            Coursera&apos;s videos. We built Cloujera to enhance Coursera&apos;s
                            limited search functionality, for those times when you want to quickly
                            search for and learn about a specific topic.
                        </p>
                        <p className="mb-6 leading-relaxed text-gray-700">
                            Cloujera was built in 48 hours for ClojureCup 2014. People and judges
                            found Cloujera highly useful and enjoy the design and performance of the
                            app. We ended up winning the public&apos;s favourite award while
                            finishing second among the 100 teams that took part in the hackathon.
                        </p>
                        <div className="flex justify-center mt-8">
                            <a href="https://github.com/portovep/cloujera">
                                <button className="bg-emerald-500 focus:outline-none hover:bg-emerald-600 inline-flex px-6 py-2 text-lg text-white border-0 rounded">
                                    <svg
                                        width="24"
                                        height="24"
                                        fill="currentColor"
                                        className="mr-3 text-purple-600 text-opacity-50 transform">
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M12 2C6.477 2 2 6.463 2 11.97c0 4.404 2.865 8.14 6.839 9.458.5.092.682-.216.682-.48 0-.236-.008-.864-.013-1.695-2.782.602-3.369-1.337-3.369-1.337-.454-1.151-1.11-1.458-1.11-1.458-.908-.618.069-.606.069-.606 1.003.07 1.531 1.027 1.531 1.027.892 1.524 2.341 1.084 2.91.828.092-.643.35-1.083.636-1.332-2.22-.251-4.555-1.107-4.555-4.927 0-1.088.39-1.979 1.029-2.675-.103-.252-.446-1.266.098-2.638 0 0 .84-.268 2.75 1.022A9.606 9.606 0 0112 6.82c.85.004 1.705.114 2.504.336 1.909-1.29 2.747-1.022 2.747-1.022.546 1.372.202 2.386.1 2.638.64.696 1.028 1.587 1.028 2.675 0 3.83-2.339 4.673-4.566 4.92.359.307.678.915.678 1.846 0 1.332-.012 2.407-.012 2.734 0 .267.18.577.688.48C19.137 20.107 22 16.373 22 11.969 22 6.463 17.522 2 12 2z"></path>
                                    </svg>
                                    Fork me
                                </button>
                            </a>
                        </div>
                    </div>
                    <div className="md:mb-0 lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-8">
                        <Image
                            className="object-center rounded rounded-b-none"
                            alt="Cloujera screenshoot"
                            src={cloujeraScreenshot}
                            height="540"
                            width="900"
                            placeholder="blur"
                        />
                    </div>
                </div>
                <div
                    data-testid="making-project"
                    className="pb-14 md:flex-row container flex flex-col items-center pt-10 mx-auto mb-10">
                    <div className="md:order-first lg:grow md:w-1/2 lg:pr-24 md:pr-16 md:items-start md:text-left flex flex-col items-center order-last mb-0 text-center">
                        <div className="flex flex-col md:flex-row md:items-baseline md:gap-3 items-center mb-6 w-full md:w-auto">
                            <h1 className="title-font text-4xl font-medium text-gray-900">
                                Crowdtransport
                            </h1>
                            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-600 mt-2 md:mt-0">
                                2013
                            </span>
                        </div>
                        <p className="mb-6 leading-relaxed text-gray-700">
                            Crowdtransport provides their users with real time public transport
                            information leveraging crowdsourcing techniques. The app allows users to
                            share with others valuable public transport geolocation data while
                            enabling real time visualization of where buses and taxis are located.
                        </p>
                        <p className="mb-6 leading-relaxed text-gray-700">
                            The platform is based on a mobile app and a REST web service. It was
                            awarded final year project of the year and involved the usage of state
                            of the art Android technologies like text to speech processing (TTS),
                            GPS tracking, Maps API and Google Cloud Messaging.
                        </p>
                        <div className="flex justify-center mt-8">
                            <a href="https://github.com/portovep/crowdtransport">
                                <button className="bg-emerald-500 focus:outline-none hover:bg-emerald-600 inline-flex px-6 py-2 text-lg text-white border-0 rounded">
                                    <svg
                                        width="24"
                                        height="24"
                                        fill="currentColor"
                                        className="mr-3 text-purple-600 text-opacity-50 transform">
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M12 2C6.477 2 2 6.463 2 11.97c0 4.404 2.865 8.14 6.839 9.458.5.092.682-.216.682-.48 0-.236-.008-.864-.013-1.695-2.782.602-3.369-1.337-3.369-1.337-.454-1.151-1.11-1.458-1.11-1.458-.908-.618.069-.606.069-.606 1.003.07 1.531 1.027 1.531 1.027.892 1.524 2.341 1.084 2.91.828.092-.643.35-1.083.636-1.332-2.22-.251-4.555-1.107-4.555-4.927 0-1.088.39-1.979 1.029-2.675-.103-.252-.446-1.266.098-2.638 0 0 .84-.268 2.75 1.022A9.606 9.606 0 0112 6.82c.85.004 1.705.114 2.504.336 1.909-1.29 2.747-1.022 2.747-1.022.546 1.372.202 2.386.1 2.638.64.696 1.028 1.587 1.028 2.675 0 3.83-2.339 4.673-4.566 4.92.359.307.678.915.678 1.846 0 1.332-.012 2.407-.012 2.734 0 .267.18.577.688.48C19.137 20.107 22 16.373 22 11.969 22 6.463 17.522 2 12 2z"></path>
                                    </svg>
                                    Fork me
                                </button>
                            </a>
                        </div>
                    </div>
                    <div className="md:mb-0 lg:max-w-lg lg:w-full md:w-1/2 flex justify-center w-5/6 mb-8">
                        <Image
                            className="object-cover object-center rounded"
                            alt="Crowdtransport screenshoot"
                            src={crowdtransportScreenshot}
                            height="500"
                            width="300"
                        />
                    </div>
                </div>
            </section>
        </Layout>
    );
}
