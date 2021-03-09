import Link from "next/link";
import Head from "next/head";
import Layout, { siteTitle } from "../components/Layout/Layout";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className="text-xl leading-6">
        <p>Hi! I am Pablo</p>
        <p>
          You can access to some test articles
          <Link href={`/posts`}>
            <a
              className="text-blue-500 hover:underline"
              rel="noopener noreferrer"
            >
              {" "}
              here.
            </a>
          </Link>
        </p>
        <p>These are my favourite tools an techniques.</p>
      </section>

      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-wrap items-center justify-center max-w-full flex-col md:max-w-4xl md:flex-row">
          <Link href="/stacks/frontend">
            <a className={styles.card} rel="noopener noreferrer">
              <h3>Frontend &rarr;</h3>
              <p>Find in-depth information about Next.js features and API.</p>
            </a>
          </Link>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h3>Backend &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h3>Infrastructure &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h3>Data engineering &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h3>Techniques &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h3>Leadership &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </div>
    </Layout>
  );
}
