export enum UserActionTypes {
  SIGN_IN_START = "SIGN_IN_START",
  SIGN_IN_SUCCESS = "SIGN_IN_SUCCESS",
  CHECK_USER_SESSION = "CHECK_USER_SESSION",
  SIGN_OUT_START = "SIGN_OUT_START",
  SIGN_OUT_SUCCESS = "SIGN_OUT_SUCCESS",
  SIGN_UP_START = "SIGN_UP_START",
  RESET_PASSWORD_START = "RESET_PASSWORD_START",
  RESET_PASSWORD_SUCCESS = "RESET_PASSWORD_SUCCESS",
  USER_ERROR = "USER_ERROR",
  RESET_USER_STATE = "RESET_USER_STATE",
  GOOGLE_SIGN_IN_START = "GOOGLE_SIGN_IN_START",
}

export interface ICurrentUser {
  id?: string | null;
  displayName?: string | null;
  email?: string | null;
  password?: string | null;
}
export interface IUserState {
  currentUser: null | ICurrentUser;
  resetPasswordSuccess: boolean;
  error: any[];
}

export interface IRegistrationFields {
  displayName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface ILoginFields {
  email: string;
  password: string;
}

export interface IRecoveryFields {
  email: string;
  errors: string[];
}
export interface ISignInStart {
  type: UserActionTypes.SIGN_IN_START;
  payload: ILoginFields;
}

export interface ISignInSuccess {
  type: UserActionTypes.SIGN_IN_SUCCESS;
  payload: ICurrentUser;
}

export interface ICheckUserSession {
  type: UserActionTypes.CHECK_USER_SESSION;
}
export interface ISignOutStart {
  type: UserActionTypes.SIGN_OUT_START;
}

export interface ISignOutSuccess {
  type: UserActionTypes.SIGN_OUT_SUCCESS;
}

export interface ISignUpStart {
  type: UserActionTypes.SIGN_UP_START;
  payload: IRegistrationFields;
}

export interface IResetPasswordStart {
  type: UserActionTypes.RESET_PASSWORD_START;
  payload: { email: string };
}

export interface IResetPasswordSuccess {
  type: UserActionTypes.RESET_PASSWORD_SUCCESS;
  payload: boolean;
}
export interface IUserError {
  type: UserActionTypes.USER_ERROR;
  payload: any[];
}

export interface IResetUserState {
  type: UserActionTypes.RESET_USER_STATE;
}

export interface IGoogleSignInStart {
  type: UserActionTypes.GOOGLE_SIGN_IN_START;
}

export type UserAction =
  | ISignInStart
  | ISignInSuccess
  | ICheckUserSession
  | ISignOutStart
  | ISignOutSuccess
  | ISignUpStart
  | IResetPasswordStart
  | IResetPasswordSuccess
  | IUserError
  | IResetUserState
  | IGoogleSignInStart;
