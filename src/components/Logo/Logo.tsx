import { FC } from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../../utils/routes/routes";

export const Logo: FC = () => {
  return (
    <Link to={ROUTES.HOME} className="logo">
      E-commerce
    </Link>
  );
};
