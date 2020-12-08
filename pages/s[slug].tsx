import Head from "next/head";
import { useRouter } from "next/router";

const Slug = () => {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <>
      <Head>
        <title>post</title>
      </Head>
      <p>
        <img src="/vercel.svg" alt="Vercel Logo" className="logo" />
        Post: <span>{slug}</span>
      </p>
      <style jsx>{`
      p {
        span{
          color: blue;
        }
        color: red;
      }
      `}</style>
    </>
  );
};

export default Slug;
