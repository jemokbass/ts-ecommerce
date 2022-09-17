import { ReactNode } from "react";
import { cn } from "../../../utils/index";

interface Props {
  children: ReactNode;
  className?: string;
}

export const Inner = ({ children, className }: Props) => {
  return <div className={cn("inner", className)}>{children}</div>;
};
