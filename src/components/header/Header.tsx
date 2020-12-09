import Logo from "./Logo";
import Menu from "./Menu";

const Header:React.FC = () => {
  return (
    <header className="container mx-auto xl:max-w-screen-xl flex flex-col md:flex-row justify-center md:justify-between items-center border-b border-gray-200">
      <Logo />
      <Menu />
    </header>
  );
};

export default Header;
