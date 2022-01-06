export interface ICurrentUser {
  uid?: string | null;
  displayName?: string | null;
  email?: string | null;
  password?: string | null;
}
export interface IUserState {
  currentUser: null | ICurrentUser;
  signInSuccess: boolean;
  signUpSuccess: boolean;
  signUpError: any[];
  recoverySuccess: boolean;
  recoveryError: any[];
}

export interface IRegistrationFields {
  displayName: string;
  email: string;
  password: string;
  confirmPassword: string;
  errors: string[];
}

export interface ILoginFields {
  email: string;
  password: string;
}

export interface IRecoveryFields {
  email: string;
  errors: string[];
}

export enum UserActionTypes {
  SET_CURRENT_USER = "SET_CURRENT_USER",
  SIGN_IN_USER = "SIGN_IN_USER",
  SIGN_IN_SUCCESS = "SIGN_IN_SUCCESS",
  SIGN_UP_ERROR = "SIGN_UP_ERROR",
  SIGN_UP_SUCCESS = "SIGN_UP_SUCCESS",
  RECOVERY_ERROR = "RECOVERY_ERROR",
  RECOVERY_SUCCESS = "RECOVERY_SUCCESS",
  RESET_AUTH_FORM = "RESET_AUTH_FORM",
}

interface ISetCurrentUser {
  type: UserActionTypes.SET_CURRENT_USER;
  payload: ICurrentUser;
}

export interface ISignInSuccess {
  type: UserActionTypes.SIGN_IN_SUCCESS;
  payload: boolean;
}
export interface ISignUpSuccess {
  type: UserActionTypes.SIGN_UP_SUCCESS;
  payload: boolean;
}

export interface ISignUpError {
  type: UserActionTypes.SIGN_UP_ERROR;
  payload: any[];
}

export interface IRecoverySuccess {
  type: UserActionTypes.RECOVERY_SUCCESS;
  payload: boolean;
}

export interface IRecoveryError {
  type: UserActionTypes.RECOVERY_ERROR;
  payload: any[];
}

export interface IResetAuthForm {
  type: UserActionTypes.RESET_AUTH_FORM;
}

interface ISignInUser {
  type: UserActionTypes.SIGN_IN_USER;
  payload: ILoginFields;
}

export type UserAction =
  | ISetCurrentUser
  | ISignInUser
  | ISignInSuccess
  | ISignUpError
  | ISignUpSuccess
  | IRecoverySuccess
  | IRecoveryError
  | IResetAuthForm;
