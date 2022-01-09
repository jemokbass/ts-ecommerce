import { useTypedSelector } from './useTypedSelector';
import { useEffect } from 'react';
import { useHistory } from 'react-router';
import { ROUTES } from '../utils/routes/routes';

export const useAuth = () => {
  const { push } = useHistory();
  const { currentUser } = useTypedSelector(state => state.user);

  useEffect(() => {
    if (!currentUser) {
      push(ROUTES.LOGIN);
    }
  }, [currentUser, push]);

  return currentUser;
};
