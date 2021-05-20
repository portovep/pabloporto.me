import Layout, { siteTitle } from '../../components/Layout/Layout';

export default function About(): JSX.Element {
    return (
        <Layout wide pageTitle={`${siteTitle} - About`}>
            <section className="text-xl sm:text-2xl leading-6 text-gray-600">
                <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h1 className="mb-4 text-4xl sm:text-5xl md:text-4xl font-bold text-gray-800">
                            Pablo Porto
                        </h1>
                        <h2 className="mb-5 title-font sm:text-4xl text-3xl font-medium text-gray-900">
                            Software Engineer, Technical lead, Traveler
                        </h2>
                        <p className="mb-8 leading-relaxed">
                            As a software consultant, I help companies of all shapes and sizes to
                            build new software systems nd evolve their digital products. I helped
                            startups build MVPs to find product/market fit, scale-ups evolve their
                            teams and practices to deliver quality software at speed and big
                            enterprises to build infrastructure in the cloud to enable their
                            delivery teams.
                        </p>
                    </div>
                    <div className="lg:max-w-lg lg:w-3/6 md:w-3/6 w-full">
                        <img
                            className="object-cover object-center rounded"
                            alt="hero"
                            src="/images/photos/about.jpeg"
                        />
                    </div>
                </div>
                <section className="text-gray-600">
                    <div className="container px-5 mx-auto">
                        <div className="text-center mb-20">
                            <h2 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                                My core skills and practices
                            </h2>
                            <p className="leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
                                The practices, skills and principles that drive my work.
                            </p>
                        </div>
                        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-20 -mx-2 text-xl">
                            <div className="p-2 sm:w-1/2 w-full">
                                <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                                    <svg
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="3"
                                        className="text-green-500 w-6 h-6 flex-shrink-0 mr-4"
                                        viewBox="0 0 24 24">
                                        <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                        <path d="M22 4L12 14.01l-3-3"></path>
                                    </svg>
                                    <span className="title-font font-medium">TDD</span>
                                </div>
                            </div>
                            <div className="p-2 sm:w-1/2 w-full">
                                <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                                    <svg
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="3"
                                        className="text-green-500 w-6 h-6 flex-shrink-0 mr-4"
                                        viewBox="0 0 24 24">
                                        <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                        <path d="M22 4L12 14.01l-3-3"></path>
                                    </svg>
                                    <span className="title-font font-medium">Pair programming</span>
                                </div>
                            </div>
                            <div className="p-2 sm:w-1/2 w-full">
                                <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                                    <svg
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="3"
                                        className="text-green-500 w-6 h-6 flex-shrink-0 mr-4"
                                        viewBox="0 0 24 24">
                                        <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                        <path d="M22 4L12 14.01l-3-3"></path>
                                    </svg>
                                    <span className="title-font font-medium">CI/CD</span>
                                </div>
                            </div>
                            <div className="p-2 sm:w-1/2 w-full">
                                <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                                    <svg
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="3"
                                        className="text-green-500 w-6 h-6 flex-shrink-0 mr-4"
                                        viewBox="0 0 24 24">
                                        <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                        <path d="M22 4L12 14.01l-3-3"></path>
                                    </svg>
                                    <span className="title-font font-medium">
                                        Distributed systems architecture
                                    </span>
                                </div>
                            </div>
                            <div className="p-2 sm:w-1/2 w-full">
                                <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                                    <svg
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="3"
                                        className="text-green-500 w-6 h-6 flex-shrink-0 mr-4"
                                        viewBox="0 0 24 24">
                                        <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                        <path d="M22 4L12 14.01l-3-3"></path>
                                    </svg>
                                    <span className="title-font font-medium">
                                        Platform engineering
                                    </span>
                                </div>
                            </div>
                            <div className="p-2 sm:w-1/2 w-full">
                                <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                                    <svg
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="3"
                                        className="text-green-500 w-6 h-6 flex-shrink-0 mr-4"
                                        viewBox="0 0 24 24">
                                        <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                        <path d="M22 4L12 14.01l-3-3"></path>
                                    </svg>
                                    <span className="title-font font-medium">
                                        Technical leardership
                                    </span>
                                </div>
                            </div>
                            <div className="p-2 sm:w-1/2 w-full">
                                <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                                    <svg
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="3"
                                        className="text-green-500 w-6 h-6 flex-shrink-0 mr-4"
                                        viewBox="0 0 24 24">
                                        <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                        <path d="M22 4L12 14.01l-3-3"></path>
                                    </svg>
                                    <span className="title-font font-medium">Agile and Lean</span>
                                </div>
                            </div>
                            <div className="p-2 sm:w-1/2 w-full">
                                <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                                    <svg
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="3"
                                        className="text-green-500 w-6 h-6 flex-shrink-0 mr-4"
                                        viewBox="0 0 24 24">
                                        <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                        <path d="M22 4L12 14.01l-3-3"></path>
                                    </svg>
                                    <span className="title-font font-medium">
                                        Infrastructure as code
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        </Layout>
    );
}
