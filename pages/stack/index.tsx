import React from 'react';
import Layout from '../../components/Layout/Layout';
import { PageHeader, StackItem } from '../../components/ui';

export default function Stacks(): React.ReactElement {
    return (
        <Layout pageTitle="My stack">
            <section data-testid="stack-intro" className="mt-8 text-xl leading-6">
                <PageHeader title="My Stack">
                    Some of the tools in my toolbox. They are the tools I default to when building
                    different types of software systems.
                </PageHeader>
                <ul className="flex flex-col mt-4">
                    <StackItem
                        name="Typescript"
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
                        description="My favourite language to build microservices, concise and simple, but not easy"
                    />
                    <StackItem
                        name="Kotlin"
                        link="https://kotlinlang.org"
                        description="My choice for the backend when time to market is crucial. It allows me to combine functional and OOP styles"
                    />
                    <StackItem
                        name="AWS"
                        link="https://aws.amazon.com"
                        description="My cloud of choice when you need more than a bunch of servers. It allows you to scale and pay as you go"
                    />
                    <StackItem
                        name="Terraform"
                        link="https://www.terraform.io"
                        description="A flexible tool to write infrastructure as code. I have being using since 2016 and keeps being my default choice"
                    />
                    <StackItem
                        name="Vercel"
                        link="https://vercel.com/"
                        description="I really like Vercel user experience, my tool of choice to deploy a static website or app across the globe"
                    />
                    <StackItem
                        name="Spring Boot"
                        link="https://spring.io/projects/spring-boot"
                        description="My choice when I have to quickly create and API or other type of backend service with Java or Kotlin"
                    />
                </ul>
            </section>
        </Layout>
    );
}
