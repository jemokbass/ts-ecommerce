import { ReactNode } from "react";
import { Link } from "react-router-dom";
interface Props {
  type?: "button" | "reset" | "submit";
  className?: string;
  onClick?: () => void;
  isLink?: boolean;
  to?: string;
  children: ReactNode;
}

export const Button = ({ children, type, className, onClick, isLink, to }: Props) => {
  return isLink ? (
    <Link className={`button${className ? ` ${className}` : ""}`} to={to ? to : "/"}>
      {children}
    </Link>
  ) : (
    <button className={`button${className ? ` ${className}` : ""}`} type={type} onClick={onClick}>
      {children}
    </button>
  );
};
