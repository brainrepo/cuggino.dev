import Link from "next/link";

interface MenuItemProps {
  name: string;
  link: string;
}

export const MenuItem: React.FC<MenuItemProps> = ({ name, link }) => {
  return (
    <li className="text-sm text-gray-800 hover:text-red-600">
      <Link href={link}>
        <a>{name}</a>
      </Link>
    </li>
  );
};

export const MenuItemSecondary: React.FC<MenuItemProps> = ({ name, link }) => {
  return (
    <li className="text-xs hover:bg-red-600 bg-gray-800 px-2 py-1 text-gray-100 rounded uppercase font-bold">
      <Link href={link}>
        <a>{name}</a>
      </Link>
    </li>
  );
};
