import Head from "next/head";
import Layout from "../components/_layout";
import Hero from "../components/hero/Hero";
import Services from "../components/services/Services";
import { getSortedServicesData } from "../libs/services";
import { getData } from "../libs/successStories";
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
  const services = getSortedServicesData();
  const successStories = getData();
  return {
    props: {
      services,
      successStories
    },
  };
}
