import Head from "next/head";
import Layout from "../components/_layout";
import Hero from "../components/hero/Hero";
import Services from "../components/common/services/Services";

import { getDocuments, Markdown } from "../services/markdownSource";

import SuccessHero from "../components/common/success_stories/SuccessHero";

type IndexProps = {
  services: Array<Markdown>;
  successStories: Array<Markdown>;
};

export default function Index({ services, successStories }: IndexProps) {
  return (
    <Layout>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Hero />
        <Services services={services} />
        <SuccessHero successStories={successStories} />
      </main>
    </Layout>
  );
}

export async function getStaticProps(): Promise<{ props: IndexProps }> {
  return {
    props: {
      services: getDocuments("contents/services"),
      successStories: getDocuments("contents/success-stories"),
    },
  };
}
