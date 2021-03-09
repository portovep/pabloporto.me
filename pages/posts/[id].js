import Head from "next/head";
import Date from "../../components/Date/Date";
import Layout from "../../components/Layout/Layout";
import { getAllPostIds, getPostData } from "../../lib/posts";

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <div className="max-w-4xl px-10 my-4 py-6 bg-white rounded-lg shadow-md">
        <div className="flex justify-between items-center">
          <span className="font-light text-gray-600">
            <Date dateString={postData.date} />
          </span>
          <a
            className="px-2 py-1 bg-gray-600 text-gray-100 font-bold rounded hover:bg-gray-500"
            href="#"
          >
            {postData.tag || "Random"}
          </a>
        </div>
        <div className="mt-2">
          <a
            className="text-2xl text-gray-700 font-bold hover:text-gray-600"
            href="#"
          >
            {postData.title}
          </a>
          <p className="mt-2 text-gray-600">
            <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
          </p>
        </div>
      </div>
    </Layout>
  );
}
