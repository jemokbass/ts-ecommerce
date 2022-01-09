import { FC } from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../utils/routes/routes';

const Logo: FC = () => {
  return (
    <Link to={ROUTES.HOME} className="logo">
      E-commerce
    </Link>
  );
};

export default Logo;
