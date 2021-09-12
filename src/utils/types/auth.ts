export interface ICurrentUser {
  uid?: string | null;
  displayName?: string | null;
  email?: string | null;
  password?: string | null;
}
export interface IAuthState {
  currentUser: null | ICurrentUser;
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

export enum AuthActionTypes {
  AUTH_LOG_IN = "AUTH_LOG_IN",
}

interface AuthLogIn {
  type: AuthActionTypes.AUTH_LOG_IN;
}

export type AuthAction = AuthLogIn;
