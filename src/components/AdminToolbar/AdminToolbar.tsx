import { FC } from "react";
import { NavLink } from "react-router-dom";
import { ROUTES } from "../../utils/routes/routes";
import "./AdminToolbar.css";

const AdminToolbar: FC = () => {
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

export default AdminToolbar;
