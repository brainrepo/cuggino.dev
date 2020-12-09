import {MenuItem, MenuItemSecondary} from "./MenuItems";

const Menu:React.FC = () => {
  return (
    <ul className="flex flex-col items-center md:flex-row space-y-4 md:space-x-6 md:space-y-0 p-4">
      <MenuItem name="Team" link="/team" />
      <MenuItem name="Servizi" link="/services" />
      <MenuItem name="Storie di successo" link="/success-stories" />
      <MenuItemSecondary name="Contact us" link="/contact-us" />
    </ul>
  );
};

export default Menu;
