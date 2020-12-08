import Head from "next/head";
import Header from "./header/Header";
import "typeface-montserrat";
import Footer from "./footer/Footer";


export const siteTitle = "Next.js Sample Website";

export default function Layout({ children }) {
  return (
    <main className="min-h-screen flex flex-col justify-between">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Header />
      <main>{children}</main>
      <Footer></Footer>
    </main>
  );
}
