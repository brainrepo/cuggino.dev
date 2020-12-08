import Head from "next/head";
import PageHero from "../components/hero/PageHero";
import Layout from "../components/_layout";

const Page = () => {
  return (
    <Layout>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container mx-auto xl:max-w-screen-xl">
        <PageHero title="TDD, Try driven deploy" subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing" />
        <div className="px-8 md:px-0 prose prose-sm lg:prose-base  lg:max-w-screen-md py-2 md:py-16 mx-auto">
          <h2>asdsad</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            ut consequat urna. Nam tincidunt, velit in fringilla ultricies,
            purus quam posuere dui, sed commodo urna augue quis tellus.
            Pellentesque dignissim ligula quis nunc sagittis, ut scelerisque
            eros eleifend. Curabitur eu fermentum sem, ac semper dui. Donec ac
            eleifend eros. In non rhoncus ante. Nullam a enim dui. Vivamus
            varius sapien a tellus scelerisque, nec imperdiet metus efficitur.
            Cras eu condimentum ante. Sed aliquam, risus vel gravida luctus,
            velit dolor ultricies nunc, sed dictum lacus eros iaculis est.
            Quisque eros dolor, consequat quis ipsum pharetra, venenatis
            pellentesque lacus. Fusce imperdiet justo purus, at pellentesque
            mauris imperdiet sit amet. Mauris id tincidunt velit. Donec a
            facilisis massa. Sed sollicitudin tristique est. Cras rutrum arcu
            elit, at euismod arcu tempus eu.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            ut consequat urna. Nam tincidunt, velit in fringilla ultricies,
            purus quam posuere dui, sed commodo urna augue quis tellus.
            Pellentesque dignissim ligula quis nunc sagittis, ut scelerisque
            eros eleifend. Curabitur eu fermentum sem, ac semper dui. Donec ac
            eleifend eros. In non rhoncus ante. Nullam a enim dui. Vivamus
            varius sapien a tellus scelerisque, nec imperdiet metus efficitur.
            Cras eu condimentum ante. Sed aliquam, risus vel gravida luctus,
            velit dolor ultricies nunc, sed dictum lacus eros iaculis est.
            Quisque eros dolor, consequat quis ipsum pharetra, venenatis
            pellentesque lacus. Fusce imperdiet justo purus, at pellentesque
            mauris imperdiet sit amet. Mauris id tincidunt velit. Donec a
            facilisis massa. Sed sollicitudin tristique est. Cras rutrum arcu
            elit, at euismod arcu tempus eu.
          </p>
          <h2>asdsad</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            ut consequat urna. Nam tincidunt, velit in fringilla ultricies,
            purus quam posuere dui, sed commodo urna augue quis tellus.
            Pellentesque dignissim ligula quis nunc sagittis, ut scelerisque
            eros eleifend. Curabitur eu fermentum sem, ac semper dui. Donec ac
            eleifend eros. In non rhoncus ante. Nullam a enim dui. Vivamus
            varius sapien a tellus scelerisque, nec imperdiet metus efficitur.
            Cras eu condimentum ante. Sed aliquam, risus vel gravida luctus,
            velit dolor ultricies nunc, sed dictum lacus eros iaculis est.
            Quisque eros dolor, consequat quis ipsum pharetra, venenatis
            pellentesque lacus. Fusce imperdiet justo purus, at pellentesque
            mauris imperdiet sit amet. Mauris id tincidunt velit. Donec a
            facilisis massa. Sed sollicitudin tristique est. Cras rutrum arcu
            elit, at euismod arcu tempus eu.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Page;
