import cl from "classnames";

const Title = ({
  title,
  subtitle,
  className = "",
  dark = false,
  left = false,
}) => {
  return (
    <h3 className={cl("text-center md:text-left", className)}>
      <span
        className={cl(
          "block text-xl lg:text-2xl font-bold font-logo leading-none",
          { "text-gray-200": dark },
          { "text-red-700": !dark },
          { "text-left ": left },
          { "text-center": !left }
        )}
      >
        {title}
      </span>

      <span
        className={cl(
          "block font-bold font-logo uppercase text-xs tracking-wider mt-1",
          { "text-gray-500 ": dark },
          { "text-gray-600": !dark },
          { "text-left ": left },
          { "text-center": !left }
        )}
      >
        {subtitle}
      </span>
    </h3>
  );
};

export default Title;
