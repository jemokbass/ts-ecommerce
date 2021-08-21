import { FC } from 'react';
import { NavLink } from 'react-router-dom';

interface ILinks {
  path: string;
  exact: boolean;
  title: string;
}

const Navigation: FC = () => {
  const links: ILinks[] = [
    { path: '/', exact: true, title: 'Homepage' },
    { path: '/registration', exact: false, title: 'Registration' },
    { path: '/login', exact: false, title: 'Login' },
  ];

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
