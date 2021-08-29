import { FC } from 'react';
import { IAuthState } from '../../utils/types/auth';
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';

const Header: FC<IAuthState> = ({ currentUser }) => {
  return (
    <header className="header">
      <Logo />
      <Navigation currentUser={currentUser} />
    </header>
  );
};

export default Header;
