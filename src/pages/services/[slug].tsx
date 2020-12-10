import Head from "next/head";
import PageHero from "../../components/hero/PageHero";
import Layout from "../../components/_layout";
import hydrate from "next-mdx-remote/hydrate";
import components from "../../components/common/MDComponents";
import {
  getStaticPaths as getPages,
  getStaticProps as getPageProps,
} from "../../services/markdownSource";
import IService from "../../models/service";

interface PageProps {
  postData: IService
}
const Page:React.FC<PageProps> = ({ postData }) => {
  const content = hydrate(postData.content, { components });

  return (
    <Layout>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container mx-auto xl:max-w-screen-xl">
        <PageHero
          title={postData.title}
          subtitle={postData.subtitle}
          image={postData.image}
          text={postData.rawContent}
        />
        <div className="px-8 md:px-0 prose prose-sm prose-red lg:prose-base  lg:max-w-screen-md py-2 md:py-16 mx-auto">
          {content}
        </div>
      </div>
    </Layout>
  );
};

export default Page;

export const getStaticPaths = getPages("contents/services");
export const getStaticProps = getPageProps("contents/services", components);
