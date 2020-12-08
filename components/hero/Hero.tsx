const Hero = () => {
  return (
    <div className="flex flex-col items-center md:flex-row py-3 md:py-6 container mx-auto xl:max-w-screen-xl">
      <div className="md:w-5/12 font-bold font-logo text-xl lg:text-2xl text-gray-800 p-6 md:px-0 xl:pr-24 text-center md:text-left max-w-64">
        Il massimo della{" "}
        <span className="text-gray-400"> proffessionalità </span> al{" "}
        <span className="text-gray-500"> costo di due pizze </span> con{" "}
        <span className="text-red-700"> cuggino.dev </span>
      </div>
      <div className="md:w-7/12 px-6 md:p-0">
        <img src="/images/computer.png" alt="cloud computer image" />
      </div>
    </div>
  );
};

export default Hero;
