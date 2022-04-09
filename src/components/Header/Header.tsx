import { FC } from "react";
import { Logo } from "../Logo";
import { Navigation } from "../Navigation";

export const Header: FC = () => {
  return (
    <header className="header">
      <Logo />
      <Navigation />
    </header>
  );
};
