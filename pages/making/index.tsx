import Layout, { siteTitle } from '../../components/Layout/Layout';
import Image from 'next/image';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import SectionDescription from '../../components/SectionDescription/SectionDescription';

export default function Making(): JSX.Element {
    return (
        <Layout wide pageTitle={`${siteTitle} - Making`}>
            <section className="body-font mt-10 text-gray-600">
                <SectionTitle text="Making" />
                <SectionDescription>
                    <p>Some of the things I made.</p>
                </SectionDescription>
                <div className="pb-14 md:flex-row container flex flex-col items-center pt-10 mx-auto mt-10 mb-10 border-b border-gray-300">
                    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 md:items-start md:text-left md:mb-0 flex flex-col items-center mb-16 text-center">
                        <h1 className="title-font mb-4 text-4xl font-medium text-gray-900">
                            1Stream
                        </h1>
                        <p className="mb-8 leading-relaxed">
                            1Stream allows you to watch Netflix or Youtube streams in sync remotely
                            with friends
                        </p>
                        <p className="mb-8 leading-relaxed">
                            Watch Netflix or Youtube streams remotely with friends. 1Stream
                            synchronizes video playback between you and your friend so you can be
                            sure you’re watching exactly the same frame at the same time.
                        </p>
                        <div className="hover:bg-gray-200 focus:outline-none flex items-center justify-center px-0 py-0 bg-gray-100 rounded-lg">
                            <a href="https://chrome.google.com/webstore/detail/1stream/ckgaafkgiajiabimkgpgkiamnolncfkg">
                                <Image
                                    alt="chrome-store-link"
                                    src="/images/projects/chrome_store.png"
                                    height="90"
                                    width="255"
                                />
                            </a>
                        </div>
                    </div>
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                        <Image
                            className="object-center rounded rounded-b-none"
                            alt="1Scream screenshoot"
                            src="/images/projects/1stream_screenshot.png"
                            height="540"
                            width="900"
                        />
                    </div>
                </div>
                <div className="pb-14 md:flex-row container flex flex-col items-center pt-10 mx-auto mb-10 border-b border-gray-300">
                    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 md:items-start md:text-left md:mb-0 flex flex-col items-center mb-16 text-center">
                        <h1 className="title-font mb-4 text-4xl font-medium text-gray-900">
                            Cloujera
                        </h1>
                        <p className="mb-8 leading-relaxed">
                            Cloujera lets you do a fine-grained search for spoken words in
                            Coursera&#39;s videos. We built Cloujera to enhance Coursera&#39;s
                            limited search functionality, for those times when you want to quickly
                            search for and learn about a specific topic.
                        </p>
                        <p className="mb-8 leading-relaxed">
                            Cloujera was built in 48 hours for ClojureCup 2014. People and judges
                            found Cloujera highly useful and enjoy the design and performance of the
                            app. We ended up winning the public&#39;s favourite award while
                            finishing second among the 100 teams that took part in the hackathon.
                        </p>
                        <div className="flex justify-center">
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
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 border border-gray-200">
                        <Image
                            className="object-center rounded"
                            alt="Cloujera screenshoot"
                            src="/images/projects/cloujera.png"
                            height="540"
                            width="900"
                        />
                    </div>
                </div>
                <div className="pb-14 md:flex-row container flex flex-col items-center pt-10 mx-auto mb-10 border-b border-gray-300">
                    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 md:items-start md:text-left md:mb-0 flex flex-col items-center mb-16 text-center">
                        <h1 className="title-font mb-4 text-4xl font-medium text-gray-900">
                            EcoShifter
                            <br className="inline-block" />
                            RESTful API
                        </h1>
                        <p className="mb-8 leading-relaxed">
                            Developed a personal cloud for the smart driving Android app EcoShifter
                            allowing users to upload their car profiles to the cloud and keep them
                            synchronized between all their devices.
                        </p>
                        <p className="mb-8 leading-relaxed">
                            Users of older versions of EcoShifter had to create again the same
                            profiles for their cars each time they switch devices. Moreover, they
                            had to enter information like the make and model of the car manually. I
                            have helped the project by developing a new backend that solves these
                            problems by allowing users to choose existing makes and models offered
                            and to save their car profiles on the cloud.
                        </p>
                        <div className="flex justify-center">
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
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 flex justify-center w-5/6">
                        <Image
                            className="object-cover object-center rounded"
                            alt="Ecoshifter screenshoot"
                            src="/images/projects/ecoshifter.webp"
                            height="500"
                            width="300"
                        />
                    </div>
                </div>
                <div className="pb-14 md:flex-row container flex flex-col items-center pt-10 mx-auto mb-10">
                    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 md:items-start md:text-left md:mb-0 flex flex-col items-center mb-16 text-center">
                        <h1 className="title-font mb-4 text-4xl font-medium text-gray-900">
                            Crowdtransport
                        </h1>
                        <p className="mb-8 leading-relaxed">
                            Platform based on a mobile app and a REST web service that provides real
                            time public transport information using crowdsourcing techniques. The
                            app allows users to share with others valuable public transport
                            geolocation data while enabling real time visualization of the
                            geolocation of buses and taxis.
                        </p>
                        <p className="mb-8 leading-relaxed">
                            Awarded final year project based on an idea of my own and involving the
                            usage of state of the art Android technologies like text to speech
                            processing (TTS), GPS tracking, Maps API and Google Cloud Messaging.
                        </p>
                        <div className="flex justify-center">
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
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 flex justify-center w-5/6">
                        <Image
                            className="object-cover object-center rounded"
                            alt="Crowdtransport screenshoot"
                            src="/images/projects/media_crowdtransport_1.png"
                            height="500"
                            width="300"
                        />
                    </div>
                </div>
            </section>
        </Layout>
    );
}
