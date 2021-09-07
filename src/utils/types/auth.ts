export interface ICurrentUser {
  uid: string;
  displayName: string;
  email: string;
}
export interface IAuthState {
  currentUser: null | ICurrentUser;
}

export interface IRegistrationFields {
  displayName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export enum AuthActionTypes {
  AUTH_LOG_IN = "AUTH_LOG_IN",
}

interface AuthLogIn {
  type: AuthActionTypes.AUTH_LOG_IN;
}

export type AuthAction = AuthLogIn;
