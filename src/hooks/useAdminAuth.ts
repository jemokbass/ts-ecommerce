import { useTypedSelector } from './useTypedSelector';
import { useEffect } from 'react';
import { useHistory } from 'react-router';
import { ROUTES } from '../utils/routes/routes';
import { checkUserIsAdmin } from '../utils/index';

export const useAdminAuth = () => {
  const { push } = useHistory();
  const { currentUser } = useTypedSelector(state => state.user);

  useEffect(() => {
    if (!checkUserIsAdmin(currentUser)) {
      push(ROUTES.LOGIN);
    }
  }, [currentUser, push]);

  return checkUserIsAdmin(currentUser);
};
