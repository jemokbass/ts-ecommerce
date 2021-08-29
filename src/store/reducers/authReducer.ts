import { IAuthState, AuthAction, AuthActionTypes } from '../../utils/types/auth';

const initialState: IAuthState = {
  currentUser: null,
};

export const authReducer = (state = initialState, action: AuthAction): IAuthState => {
  switch (action.type) {
    case AuthActionTypes.AUTH_LOG_IN:
      return { ...state };
    default:
      return state;
  }
};
