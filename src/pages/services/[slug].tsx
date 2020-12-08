import Head from "next/head";
import PageHero from "../../components/hero/PageHero";
import Layout from "../../components/_layout";
import renderToString from "next-mdx-remote/render-to-string";
import hydrate from "next-mdx-remote/hydrate";
import components from "../../components/common/MDComponents";
import  {getDocuments, getDocument} from '../../services/markdownSource';

const Page = ({ postData }) => {
  const content = hydrate(postData.content, { components });

  return (
    <Layout>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container mx-auto xl:max-w-screen-xl">
        <PageHero title={postData.title} subtitle={postData.subtitle} />
        <div
          className="px-8 md:px-0 prose prose-sm prose-red lg:prose-base  lg:max-w-screen-md py-2 md:py-16 mx-auto"
  >{content}</div>
      </div>
    </Layout>
  );
};

export default Page;

export async function getStaticPaths() {
  const paths = getDocuments('contents/services');
  return {
    paths: paths.map((doc) => ({ params: { slug: doc.slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = getDocument('contents/services', params.slug);
  const mdxSource = await renderToString(postData.content, { components });
  return {
    props: {
      postData: { ...postData, content: mdxSource },
    },
  };
}
