import ReadingTime from "../page/ReadingTime";

const PageHero = ({ title = "", subtitle = "" }) => {
  return (
    <div className="flex flex-col items-center md:flex-row py-3 md:py-6 container mx-auto xl:max-w-screen-xl">
      <div className="md:w-5/12  p-6 md:px-0 xl:pr-24 max-w-64">
        <h1 className="font-bold font-logo text-xl lg:text-2xl text-red-700 text-center md:text-left ">
          {title}
        </h1>
        <h2 className="tracking-tight text-gray-600">{subtitle}</h2>
        <ReadingTime text="dlkfjaòlksdjf lòksaj dfòl kaj òflkjsadlòkf jsdòlkf jsòdlkjf òlskdfj òaslkdjfò lksjdfòlka jfòkasjfòlakas jdòlkfjòldkf jaòslkdfj òalskdjf lsak jdòlkf jasòlkf jaòslkfj òasldkjfa òalksdj fòalksjfòlksdj aòkj sòfka jsòlkfjòas lkjf òlaskj fòlka jsòfl kajòlfk sòalk" />
      </div>
      <div className="md:w-7/12 px-6 md:p-0 order-first md:order-last">
        <img src="/images/computer.png" alt="cloud computer image" />
      </div>
    </div>
  );
};

export default PageHero;
