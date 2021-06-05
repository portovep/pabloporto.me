import Layout from '../components/Layout/Layout';
import Card from '../components/Card/Card';

export default function Home(): JSX.Element {
    return (
        <Layout home>
            <section className="mt-12 text-xl leading-6">
                <div className="max-w-2xl px-6 mx-auto text-center">
                    <h2 className="text-3xl font-semibold text-gray-800">
                        Hi,
                        <span className="text-emerald-500 pl-1 font-bold rounded">I’m Pablo</span>.
                        Nice to meet you.
                    </h2>
                    <p className="mt-7 text-gray-600">
                        I am a Lead Software Consultant at&nbsp;
                        <a
                            href="https://thoughtworks.com"
                            target="_blank"
                            className="text-emerald-500 hover:text-emerald-600 font-medium"
                            rel="noopener noreferrer">
                            ThoughtWorks
                        </a>
                        &nbsp;that loves building digital products.&nbsp;I also like traveling and
                        discovering new places.
                    </p>
                </div>
            </section>

            <div className="flex flex-col items-center justify-center mt-10">
                <div className="md:max-w-4xl md:flex-row flex flex-col flex-wrap items-center justify-center max-w-full">
                    <Card
                        title="Writing"
                        description="A collection of half-baked articles, research, and other written stuff."
                        linkURL="/posts"
                    />
                    <Card
                        title="Working"
                        description="What I do at work. My experience as a software engineer."
                        linkURL="/working"
                    />
                    <Card
                        title="Traveling"
                        description="One of my hobbies is traveling. Explore some of my best shoots."
                        linkURL="/traveling"
                    />
                    <Card
                        title="Making"
                        description="I like to build stuff. Check some of the things I made."
                        linkURL="/making"
                    />
                </div>
            </div>
        </Layout>
    );
}
