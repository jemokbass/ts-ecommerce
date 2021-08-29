export interface IAuthState {
  currentUser: null | any;
}

export enum AuthActionTypes {
  AUTH_LOG_IN = "AUTH_LOG_IN",
}

interface AuthLogIn {
  type: AuthActionTypes.AUTH_LOG_IN;
}

export type AuthAction = AuthLogIn;
