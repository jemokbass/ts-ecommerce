import { IUserState, UserAction, UserActionTypes } from '../../utils/types/user.types';

const initialState: IUserState = {
  currentUser: null,
  signInSuccess: false,
  signUpSuccess: false,
  signUpError: [],
  recoverySuccess: false,
  recoveryError: [],
};

export const userReducer = (state = initialState, action: UserAction): IUserState => {
  switch (action.type) {
    case UserActionTypes.SET_CURRENT_USER:
      return { ...state, currentUser: action.payload };
    case UserActionTypes.SIGN_IN_SUCCESS:
      return { ...state, signInSuccess: action.payload };
    case UserActionTypes.SIGN_UP_SUCCESS:
      return { ...state, signUpSuccess: action.payload };
    case UserActionTypes.SIGN_UP_ERROR:
      return { ...state, signUpError: action.payload };
    case UserActionTypes.RECOVERY_SUCCESS:
      return { ...state, recoverySuccess: action.payload };
    case UserActionTypes.RECOVERY_ERROR:
      return { ...state, recoveryError: action.payload };
    case UserActionTypes.RESET_AUTH_FORM:
      return {
        ...state,
        currentUser: null,
        signInSuccess: false,
        signUpSuccess: false,
        signUpError: [],
        recoverySuccess: false,
        recoveryError: [],
      };
    default:
      return state;
  }
};
