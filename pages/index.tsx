import Layout from '../components/Layout/Layout';
import Card from '../components/Card/Card';

export default function Home(): JSX.Element {
    return (
        <Layout home>
            <section className="mt-12 text-xl leading-6">
                <div className="max-w-2xl px-6 text-center mx-auto">
                    <h2 className="text-3xl font-semibold text-gray-800">
                        Hi,
                        <span className="rounded text-emerald-500 font-bold pl-1">I’m Pablo</span>.
                        Nice to meet you.
                    </h2>
                    <p className="text-gray-600 mt-7">
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

            <div className="flex flex-col justify-center items-center mt-10">
                <div className="flex flex-wrap items-center justify-center max-w-full flex-col md:max-w-4xl md:flex-row">
                    <Card
                        title="Writing"
                        description="A collection of half-baked articles, research, and other written stuff."
                        linkURL="/posts"
                    />
                    <Card
                        title="Working"
                        description="What I do for a living. My experience as a software engineer."
                        linkURL="/working"
                    />
                    <Card
                        title="Traveling"
                        description="Some of my best photos, taken while exploring the world."
                        linkURL="/traveling"
                    />
                    <Card
                        title="Making"
                        description="A collection of pet projects and other apps I made. "
                    />
                </div>
            </div>
        </Layout>
    );
}
