export interface ICurrentUser {
  uid?: string | null;
  displayName?: string | null;
  email?: string | null;
  password?: string | null;
}
export interface IUserState {
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

export interface IRecoveryFields {
  email: string;
  errors: string[];
}

export enum UserActionTypes {
  SET_CURRENT_USER = "SET_CURRENT_USER",
}

interface SetCurrentUser {
  type: UserActionTypes.SET_CURRENT_USER;
  payload: ICurrentUser;
}

export type UserAction = SetCurrentUser;
