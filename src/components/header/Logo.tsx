const Logo = () => {
  return (
    <h1 className="flex items-center justify-center md:justify-left py-4 border-b border-gray-200 md:border-0 w-full md:w-auto ">
      <img src="/images/logo.png" alt="cuggino.dev logo" className="w-7" />
      <span className="ml-1 font-logo font-bold text-gray-800">
        cuggino.dev
      </span>
    </h1>
  );
};

export default Logo;
