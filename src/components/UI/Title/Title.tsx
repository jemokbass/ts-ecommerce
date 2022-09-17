import { ReactNode } from "react";
import { cn } from "../../../utils/index";

interface Props {
  type: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "label" | "legend";
  className?: string;
  children: ReactNode;
}

export const Title = ({ children, type, className }: Props) => {
  switch (type) {
    case "h1":
      return <h1 className={cn("title title-xxl", className)}>{children}</h1>;
    case "h2":
      return <h2 className={cn("title title-xl", className)}>{children}</h2>;
    case "h3":
      return <h3 className={cn("title title-md", className)}>{children}</h3>;
    case "h4":
      return <h4 className={cn("title title-sm", className)}>{children}</h4>;
    case "h5":
      return <h5 className={cn("title title-xs", className)}>{children}</h5>;
    case "h6":
      return <h6 className={cn("title title-xxs", className)}>{children}</h6>;
    case "label":
      return <label className={cn("title title-label", className)}>{children}</label>;
    case "legend":
      return <legend className={cn("title title-legend", className)}>{children}</legend>;
    default:
      return null;
  }
};
