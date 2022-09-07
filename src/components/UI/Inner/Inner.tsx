import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export const Inner = ({ children }: Props) => {
  return <div className="inner">{children}</div>;
};
