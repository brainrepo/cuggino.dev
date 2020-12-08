const MenuItem = ({ name, link }) => {
  return (
    <li className="text-xs text-gray-800 hover:text-red-600">
      <a>{name}</a>
    </li>
  );
};

export default MenuItem;
