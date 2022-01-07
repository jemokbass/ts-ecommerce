import { IUserState, UserAction, UserActionTypes } from '../../utils/types/user.types';

const initialState: IUserState = {
  currentUser: null,
  resetPasswordSuccess: false,
  error: [],
};

export const userReducer = (state = initialState, action: UserAction): IUserState => {
  switch (action.type) {
    case UserActionTypes.SIGN_IN_SUCCESS:
      return { ...state, currentUser: action.payload, error: [] };
    case UserActionTypes.RESET_USER_STATE:
    case UserActionTypes.SIGN_OUT_SUCCESS:
      return { ...state, ...initialState };
    case UserActionTypes.USER_ERROR:
      return { ...state, error: action.payload };
    case UserActionTypes.RESET_PASSWORD_SUCCESS:
      return { ...state, resetPasswordSuccess: action.payload };
    default:
      return state;
  }
};
