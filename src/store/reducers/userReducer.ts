import { IUserState, AuthAction, AuthActionTypes } from '../../utils/types/user.types';

const initialState: IUserState = {
  currentUser: null,
};

export const userReducer = (state = initialState, action: AuthAction): IUserState => {
  switch (action.type) {
    case AuthActionTypes.SET_CURRENT_USER:
      return { ...state, currentUser: action.payload };
    default:
      return state;
  }
};
