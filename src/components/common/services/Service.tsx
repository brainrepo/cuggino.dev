interface ServiceProps {
  title: string;
  short: string;
}

const Service: React.FC<ServiceProps> = ({ title, short }) => {
  return (
    <li className="pl-6 relative block">
      <h3 className="text-red-500 font-logo font-bold mb-1">{title}</h3>
      <p className="text-gray-200 text-xs">{short}</p>
      <svg
        className="stroke-current text-red-500 w-5 absolute top-0 left-0"
        viewBox="0 0 20 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4 12.5478L7.2 16.4087L15.2 6.75653"
          className="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </li>
  );
};

export default Service;
