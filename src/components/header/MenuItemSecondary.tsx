const MenuItemSecondary = ({ name, link }) => {
  return (
    <li className="text-xs hover:text-red-600 bg-gray-800 px-2 py-1 text-gray-100 rounded uppercase">
      <a>{name}</a>
    </li>
  );
};

export default MenuItemSecondary;
