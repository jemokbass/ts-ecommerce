import { FC } from "react";
import { NavLink } from "react-router-dom";
import { ROUTES } from "../../utils/routes/routes";
import "./AdminToolbar.css";

export const AdminToolbar: FC = () => {
  return (
    <div className="admin-toolbar">
      <ul>
        <li>
          <NavLink to={ROUTES.ADMIN}>My admin</NavLink>
        </li>
      </ul>
    </div>
  );
};
