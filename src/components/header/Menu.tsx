import MenuItem from "./MenuItem";
import MenuItemSecondary from "./MenuItemSecondary";

const Menu = () => {
  return (
    <ul className="flex flex-col items-center md:flex-row space-y-4 md:space-x-6 md:space-y-0 p-4">
      <MenuItem name="Team" link="" />
      <MenuItem name="Servizi" link="" />
      <MenuItem name="Storie di successo" link="" />
      <MenuItemSecondary name="Contact us" link="" />
    </ul>
  );
};

export default Menu;
