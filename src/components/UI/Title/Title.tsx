import { FC } from "react";

interface ITitleProps {
  type: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  className?: string;
}

const Title: FC<ITitleProps> = ({ children, type, className }) => {
  switch (type) {
    case "h1":
      return <h1 className={`title title-xxl${className ? ` ${className}` : ""}`}>{children}</h1>;
    case "h2":
      return <h2 className={`title title-xll${className ? ` ${className}` : ""}`}>{children}</h2>;
    case "h3":
      return <h3 className={`title title-md${className ? ` ${className}` : ""}`}>{children}</h3>;
    case "h4":
      return <h4 className={`title title-sm${className ? ` ${className}` : ""}`}>{children}</h4>;
    case "h5":
      return <h5 className={`title title-xs${className ? ` ${className}` : ""}`}>{children}</h5>;
    case "h6":
      return <h6 className={`title title-xxs${className ? ` ${className}` : ""}`}>{children}</h6>;
    default:
      return null;
  }
};

export default Title;
