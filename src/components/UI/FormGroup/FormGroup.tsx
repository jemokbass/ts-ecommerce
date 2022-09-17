import { ReactNode } from "react";
import { cn } from "../../../utils/index";

interface Props {
  children: ReactNode;
  className?: string;
}

export const FormGroup = ({ children, className }: Props) => {
  return <fieldset className={cn("form-group", className)}>{children}</fieldset>;
};
