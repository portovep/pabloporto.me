import Layout, { siteTitle } from '../../components/Layout/Layout';

export default function About(): JSX.Element {
    return (
        <Layout wide pageTitle={`${siteTitle} - About`}>
            <section className="sm:text-2xl text-xl leading-6 text-gray-600">
                <div className="md:flex-row container flex flex-col items-center px-5 py-24 mx-auto">
                    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 md:items-start md:text-left md:mb-0 flex flex-col items-center mb-16 text-center">
                        <h1 className="sm:text-5xl md:text-4xl mb-4 text-4xl font-bold text-gray-800">
                            Pablo Porto
                        </h1>
                        <h2 className="title-font sm:text-4xl mb-5 text-3xl font-medium text-gray-900">
                            Software Engineer, Technical lead, Traveler
                        </h2>
                        <p className="mb-8 leading-relaxed">
                            As a software consultant, I help companies of all shapes and sizes to
                            build new software systems and evolve their digital products.
                        </p>
                        <p className="leading-relaxed">
                            I helped startups build MVPs to find product/market fit, scale-ups
                            evolve their teams and practices to deliver quality software at speed
                            and big enterprises to build infrastructure in the cloud to enable their
                            delivery teams.
                        </p>
                    </div>
                    <div className="lg:max-w-lg lg:w-3/6 md:w-3/6 w-full">
                        <img
                            className="object-cover object-center rounded"
                            alt="hero"
                            src="/images/about.jpeg"
                        />
                    </div>
                </div>
                <section className="text-gray-600">
                    <div className="container px-5 mx-auto">
                        <div className="mb-20 text-center">
                            <h2 className="title-font sm:text-4xl mb-4 text-3xl font-medium text-gray-900">
                                Principles and practices
                            </h2>
                            <p className="xl:w-2/4 lg:w-3/4 mx-auto leading-relaxed">
                                The software engineering principles and practices that drive my
                                work.
                            </p>
                        </div>
                        <div className="lg:w-4/5 sm:mx-auto sm:mb-20 flex flex-wrap -mx-2 text-xl">
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
                                        Technical leardership
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
                        </div>
                    </div>
                </section>
            </section>
        </Layout>
    );
}
