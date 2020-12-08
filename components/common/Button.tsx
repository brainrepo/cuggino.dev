import cl from "classnames";


const Button = ({ href, text, mode = "primary" }) => {
  const classNames = cl("p-3 text-sm font-bold px-6", {
    "bg-gray-900 text-gray-100": mode === "primary",
    "bg-red-700 text-red-200 hover:bg-red-500 hover:text-white": mode === "secondary",
  });
  return (
    <a href={href} className={classNames}>
      {text}
    </a>
  );
};

export default Button;
