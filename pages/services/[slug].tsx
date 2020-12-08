import Head from "next/head";
import PageHero from "../../components/hero/PageHero";
import Layout from "../../components/_layout";
import { getSortedServicesData } from "../../libs/services";
import { getServiceData } from "../../libs/services";

const Page = ({ postData }) => {
  return (
    <Layout>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container mx-auto xl:max-w-screen-xl">
        <PageHero title={postData.title} subtitle={postData.subtitle} />
        <div className="px-8 md:px-0 prose prose-sm lg:prose-base  lg:max-w-screen-md py-2 md:py-16 mx-auto"></div>
      </div>
    </Layout>
  );
};

export default Page;

export async function getStaticPaths() {
  const paths = getSortedServicesData();
  return {
    paths: paths.map((doc) => ({ params: { slug: doc.slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = getServiceData(params.slug);
  return {
    props: {
      postData,
    },
  };
}
