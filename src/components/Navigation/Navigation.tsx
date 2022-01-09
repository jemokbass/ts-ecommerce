import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { ROUTES } from '../../utils/routes/routes';

interface ILinks {
  path: string;
  exact: boolean;
  title: string;
}

const Navigation: FC = () => {
  const { currentUser } = useTypedSelector(state => state.user);
  let links: ILinks[] = [
    { path: ROUTES.HOME, exact: true, title: 'Homepage' },
    { path: ROUTES.REGISTRATION, exact: false, title: 'Registration' },
    { path: ROUTES.LOGIN, exact: false, title: 'Login' },
  ];

  if (currentUser) {
    links = [
      { path: ROUTES.DASHBOARD, exact: true, title: 'Dashboard' },
      { path: ROUTES.LOGOUT, exact: false, title: 'Logout' },
    ];
  }

  return (
    <nav className="navigation">
      <ul className="navigation__list">
        {links.map(({ exact, path, title }) => (
          <li className="navigation__list-item" key={title}>
            <NavLink to={path} exact={exact}>
              {title}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
