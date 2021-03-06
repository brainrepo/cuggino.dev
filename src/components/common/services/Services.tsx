import Title from "../Title";
import Service from "./Service";
import Link from "next/link"

const Services = ({ services }) => {
  return (
    <div className="bg-gray-900 py-14 bg-dark-cross-pattern bg-fixed md:bg-local bg-no-repeat bg-left-bottom">
      <div className="container mx-auto xl:max-w-screen-xl md:flex px-6 md:px-0">
        <div className="md:w-6/12">
          <Title
            title="In un unica piattaforma"
            subtitle="Tutto quello di cui hai bisogno"
            dark
            left
          />
        </div>
        <div className="md:w-6/12 grid gap-8 lg:grid-cols-2 p-5 md:p-0">
          {services?.map((s: {title:string, short:string, slug:string}) => (
            <Link href={`/services/${s.slug}`} key={s.slug} ><a>
              <Service title={s.title} short={s.short}/>
              </a>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
