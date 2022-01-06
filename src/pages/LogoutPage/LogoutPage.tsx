import { FC, useEffect, useState } from 'react';
import { Redirect } from 'react-router';
import { auth } from '../../utils/firebase/utils.firebase';
import { ROUTES } from '../../utils/routes/routes';

const LogoutPage: FC = () => {
  const [isSuccessful, setIsSuccessful] = useState(false);

  const logOutAction = async () => {
    await auth.signOut();
    setIsSuccessful(true);
  };

  useEffect(() => {
    logOutAction();

    return () => {
      logOutAction();
    };
  }, []);

  return <section className="logout-page">{isSuccessful && <Redirect to={ROUTES.HOME} />}</section>;
};

export default LogoutPage;
