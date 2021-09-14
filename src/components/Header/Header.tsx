import { FC } from 'react';
import { IUserState } from '../../utils/types/user.types';
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';

const Header: FC<IUserState> = ({ currentUser }) => {
  return (
    <header className="header">
      <Logo />
      <Navigation currentUser={currentUser} />
    </header>
  );
};

export default Header;
