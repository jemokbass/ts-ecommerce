import { FC } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as PeopleIcon } from "../../assets/img/people.svg";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { ROUTES } from "../../utils/routes/routes";

export const Aside: FC = () => {
  const { currentUser } = useTypedSelector(state => state.user);

  return (
    <aside className="aside">
      <div className="aside__profile">
        <div className="aside__profile-icon">
          <PeopleIcon />
        </div>
        <p className="aside__profile-name">{currentUser?.displayName}</p>
      </div>
      <Link className="aside__link" to={ROUTES.HOME}>
        Home
      </Link>
    </aside>
  );
};
