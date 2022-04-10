import { FC } from "react";
interface Props {
  type?: "button" | "reset" | "submit";
  className?: string;
  onClick?: () => void;
}

export const Button: FC<Props> = ({ children, type, className, onClick }) => {
  return (
    <button className={`button${className ? ` ${className}` : ""}`} type={type} onClick={onClick}>
      {children}
    </button>
  );
};
