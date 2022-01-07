import { IGoogleSignInStart } from '../../utils/types/user.types';
import {
  UserActionTypes,
  ICurrentUser,
  ISignInSuccess,
  ISignInStart,
  IResetUserState,
} from '../../utils/types/user.types';
import {
  ISignUpStart,
  IRegistrationFields,
  IUserError,
  IResetPasswordStart,
  IResetPasswordSuccess,
} from '../../utils/types/user.types';
import {
  ILoginFields,
  ICheckUserSession,
  ISignOutStart,
  ISignOutSuccess,
} from '../../utils/types/user.types';

export const signInStart = (credentials: ILoginFields): ISignInStart => ({
  type: UserActionTypes.SIGN_IN_START,
  payload: credentials,
});

export const signInSuccess = (user: ICurrentUser): ISignInSuccess => ({
  type: UserActionTypes.SIGN_IN_SUCCESS,
  payload: user,
});

export const checkUserSession = (): ICheckUserSession => ({
  type: UserActionTypes.CHECK_USER_SESSION,
});

export const signOutStart = (): ISignOutStart => ({
  type: UserActionTypes.SIGN_OUT_START,
});

export const signOutSuccess = (): ISignOutSuccess => ({
  type: UserActionTypes.SIGN_OUT_SUCCESS,
});

export const signUpStart = (credentials: IRegistrationFields): ISignUpStart => ({
  type: UserActionTypes.SIGN_UP_START,
  payload: credentials,
});

export const resetPasswordStart = (credentials: { email: string }): IResetPasswordStart => ({
  type: UserActionTypes.RESET_PASSWORD_START,
  payload: credentials,
});

export const resetPasswordSuccess = (): IResetPasswordSuccess => ({
  type: UserActionTypes.RESET_PASSWORD_SUCCESS,
  payload: true,
});

export const userError = (error: any[]): IUserError => ({
  type: UserActionTypes.USER_ERROR,
  payload: error,
});

export const resetUserState = (): IResetUserState => ({
  type: UserActionTypes.RESET_USER_STATE,
});

export const googleSignInStart = (): IGoogleSignInStart => ({
  type: UserActionTypes.GOOGLE_SIGN_IN_START,
});
