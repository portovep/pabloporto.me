import Head from "next/head";
import Layout, { siteTitle } from "../../components/Layout/Layout";
import PostSummary from "../../components/PostSummary/PostSummary";
import { getSortedPostsData } from "../../lib/posts";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Blog({ allPostsData }) {
  return (
    <Layout>
      <Head>
        <title>{`${siteTitle} - Blog`}</title>
      </Head>

      <section className="m-5 text-xl leading-6">
        <h1 className="text-xl font-bold text-gray-700 md:text-2xl">Posts</h1>
        <ul className="mt-5">
          {allPostsData.map((postData) => (
            <li key={postData.id}>
              <PostSummary postData={postData} />
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
