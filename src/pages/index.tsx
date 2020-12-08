import Head from "next/head";
import Layout from "../components/_layout";
import Hero from "../components/hero/Hero";
import Services from "../components/services/Services";

import  {getDocuments} from '../services/markdownSource';

import SuccessHero from "../components/success_stories/SuccessHero";

export default function Home({ services, successStories }) {
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

export async function getStaticProps() {
  return {
    props: {
      services: getDocuments('contents/services'),
      successStories: getDocuments('contents/success_stories')
    },
  };
}
