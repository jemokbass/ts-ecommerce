import { FC } from "react";
import { NavLink } from "react-router-dom";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { ROUTES } from "../../utils/routes/routes";

interface ILinks {
  path: string;
  title: string;
}

export const Navigation: FC = () => {
  const { currentUser } = useTypedSelector(state => state.user);
  let links: ILinks[] = [
    { path: ROUTES.HOME, title: "Homepage" },
    { path: ROUTES.REGISTRATION, title: "Registration" },
    { path: ROUTES.LOGIN, title: "Login" },
  ];

  if (currentUser) {
    links = [
      { path: ROUTES.HOME, title: "Homepage" },
      { path: ROUTES.SEARCH, title: "Search" },
      { path: ROUTES.DASHBOARD, title: "My account" },
      { path: ROUTES.LOGOUT, title: "Logout" },
    ];
  }

  return (
    <nav className="navigation">
      <ul className="navigation__list">
        {links.map(({ path, title }) => (
          <li className="navigation__list-item" key={title}>
            <NavLink to={path}>{title}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
