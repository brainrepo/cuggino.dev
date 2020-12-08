import Image from "next/image";

const H2 = ({ children }) => (
  <h2 className="text-lg font-logo font-bold text-red-700 my-3">{children}</h2>
);

const Img = ({ src }) => (
  <Image
    src={src}
    width="500"
    height="350"
    alt="Picture of the author"
    layout="responsive"
    className="object-contain -ml-3 -mr-3"
  />
);

export default {
  h2: H2,
  img: Img,
};
