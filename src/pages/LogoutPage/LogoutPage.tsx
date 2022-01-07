import { FC, useCallback, useEffect } from 'react';
import { useHistory } from 'react-router';
import { ROUTES } from '../../utils/routes/routes';
import { useActions } from '../../hooks/useActions';

const LogoutPage: FC = () => {
  const { push } = useHistory();
  const { signOutStart } = useActions();

  const logOutAction = useCallback(() => {
    signOutStart();

    return push(ROUTES.LOGIN);
  }, [signOutStart, push]);

  useEffect(() => {
    logOutAction();
  }, [logOutAction]);

  return <section className="logout-page"></section>;
};

export default LogoutPage;
