import Head from 'next/head';
import Layout from '../../components/Layout/Layout';
import StackItem from '../../components/StackItem/StackItem';

export default function Stacks(): JSX.Element {
    return (
        <Layout>
            <Head>
                <title>Pablo Porto - My Stack</title>
            </Head>
            <section className="mt-8 text-xl leading-6">
                <h1 className="ml-2 text-2xl sm:text-5xl lg:text-6xl font-bold text-gray-700 md:text-4xl">
                    My Stack
                </h1>
                <p className="ml-2 mt-4 text-lg sm:text-xl sm:leading-10 space-y-6 mb-6 max-w-3xl">
                    Some of the tools in my professional toolbox. Over the years, these have become
                    my sensible defaults for build software.
                </p>
                <ul className="flex flex-col mt-8">
                    <StackItem
                        name="TypeScript"
                        link="https://www.typescriptlang.org"
                        description="The default choice for building mantainable frontend web applications"
                    />
                    <StackItem
                        name="Next.js"
                        link="https://https://nextjs.org/"
                        description="I really love this framework, it is my sensible default to start a frontend website or application"
                    />
                    <StackItem
                        name="React"
                        link="https://reactjs.org"
                        description="My frontend framework of choice, really nice documentation and a great ecosystem"
                    />
                    <StackItem
                        name="Clojure"
                        link="https://clojure.org"
                        description="My favourity language to build microservices, concise and simple, but not easy"
                    />
                    <StackItem
                        name="Kotlin"
                        link="https://kotlinlang.org"
                        description="My choise for the backend when time to market is crucial. It allows me to combine functional and OOP styles"
                    />
                    <StackItem
                        name="AWS"
                        link="https://aws.amazon.com"
                        description="My cloud of choice when you need more than a bunch of servers. It allows you to scale and pay as you go"
                    />
                    <StackItem
                        name="Terraform"
                        link="https://www.terraform.io"
                        description="A flexible tool to write infrastructure as code. I have being using since 2016 and keeps being my default choice."
                    />
                </ul>
            </section>
        </Layout>
    );
}
