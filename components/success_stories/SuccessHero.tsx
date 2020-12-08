import Button from "../common/Button";
import Title from "../common/Title";
import SuccessItem from "./SuccessItem";

const SuccessHero = ({ successStories }) => {
  return (
    <div className="py-6 mx-auto container xl:max-w-screen-xl">
      <Title
        title="Storie di sulcesso"
        subtitle="i traguardi raggiunti con il cuggino cloud e le cuggino metodologies"
        className="md:w-2/3 lg:w-1/3 mx-auto px-6 py-6"
      />
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-6 md:p-0">
        {successStories.map((story) => (
          <SuccessItem
            title={story.title}
            subtitle={story.subtitle}
            logo={story.logo}
          />
        ))}
      </div>
      <div className="text-center text-gray-800 text-sm py-16">
        <div>
          Conosci una società che ha raggiunto grandi traguardi con
          miocugginocloud, miocuggino dev e le mio cugino metologies?
        </div>
        <div className="mt-12">
          <Button text="Raccontacela ora" mode="secondary" />
        </div>
        
      </div>

    </div>
  );
};

export default SuccessHero;
