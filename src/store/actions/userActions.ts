import { UserActionTypes, ICurrentUser, UserAction } from '../../utils/types/user.types';

export const setCurrentUser = (payload: ICurrentUser): UserAction => ({
  type: UserActionTypes.SET_CURRENT_USER,
  payload,
});
