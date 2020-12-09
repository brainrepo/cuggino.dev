import Image from "next/image";
import ReadingTime from "../common/ReadingTime";
import cl from "classnames";

const Title = ({ title, subtitle, text, image }) => {
  return (
    <div
      className={cl(
        " p-3 md:p-6 text-center",
        { "md:text-left md:w-5/12 max-w-64 md:px-0 xl:pr-24 ": image },
        { "w-full block": !image }
      )}
    >
      <h1 className="font-bold font-logo text-2xl text-red-700  ">{title}</h1>
      <h2 className="tracking-relaxed text-gray-600 font-semibold ">
        {subtitle}
      </h2>
      <ReadingTime text={text} />
    </div>
  );
};

const PageHero = ({ title = "", subtitle = "", text = "", image = null }) => {
  return (
    <div className="flex flex-col items-center justify-center md:flex-row py-3 md:py-6 container mx-auto xl:max-w-screen-xl">
      <Title title={title} subtitle={subtitle} text={text} image={image} />
      {image && (
        <div className="md:w-7/12 px-6 md:p-0 order-first md:order-last bg-white-cross-pattern bg-fixed md:bg-local bg-no-repeat bg-right">
          <Image
            src={image}
            width="500"
            height="300"
            alt={title}
            layout="responsive"
            className="object-contain"
          />
        </div>
      )}
    </div>
  );
};

export default PageHero;
