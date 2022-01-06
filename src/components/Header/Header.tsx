import { FC } from 'react';
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';

const Header: FC = () => {
  return (
    <header className="header">
      <Logo />
      <Navigation />
    </header>
  );
};

export default Header;
