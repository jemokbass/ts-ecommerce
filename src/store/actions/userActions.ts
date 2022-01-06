import { Action, ActionCreator, AnyAction } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { auth, handleUserProfile, GoogleProvider } from '../../utils/firebase/utils.firebase';
import {
  UserActionTypes,
  ICurrentUser,
  UserAction,
  ISignInSuccess,
  ISignUpError,
} from '../../utils/types/user.types';
import { Dispatch } from 'react';
import {
  ISignUpSuccess,
  IRecoverySuccess,
  IRecoveryError,
  IResetAuthForm,
} from '../../utils/types/user.types';

export const setCurrentUser: ActionCreator<Action> = (payload: ICurrentUser): UserAction => ({
  type: UserActionTypes.SET_CURRENT_USER,
  payload,
});

export const signInUser: ActionCreator<ThunkAction<void, ISignInSuccess, unknown, AnyAction>> =
  ({ email, password }) =>
  async (dispatch: Dispatch<ISignInSuccess>) => {
    try {
      await auth.signInWithEmailAndPassword(email, password);
      dispatch({
        type: UserActionTypes.SIGN_IN_SUCCESS,
        payload: true,
      });
    } catch (error) {
      console.log(error);
    }
  };

export const signUpUser: ActionCreator<ThunkAction<void, ISignUpError, unknown, AnyAction>> =
  ({ email, password, displayName, confirmPassword }) =>
  async (dispatch: Dispatch<ISignUpError | ISignUpSuccess>) => {
    if (password !== confirmPassword) {
      const err = ["Password don't match"];
      dispatch({
        type: UserActionTypes.SIGN_UP_ERROR,
        payload: err,
      });
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(email, password);

      await handleUserProfile(user, { displayName });
      dispatch({
        type: UserActionTypes.SIGN_UP_SUCCESS,
        payload: true,
      });
    } catch (error) {
      console.log(error);
    }
  };

export const recoveryPassword: ActionCreator<ThunkAction<void, IRecoverySuccess, unknown, AnyAction>> =
  ({ email }) =>
  async (dispatch: Dispatch<IRecoverySuccess | IRecoveryError>) => {
    const config = {
      url: 'http://localhost:3000/login',
    };

    try {
      await auth
        .sendPasswordResetEmail(email, config)
        .then(result => {
          dispatch({ type: UserActionTypes.RECOVERY_SUCCESS, payload: true });
        })
        .catch(err => {
          dispatch({
            type: UserActionTypes.RECOVERY_ERROR,
            payload: ['Email not found. Please try again.'],
          });
        });
    } catch (error) {
      console.log(error);
    }
  };

export const signInWithGoogle: ActionCreator<ThunkAction<void, ISignInSuccess, unknown, AnyAction>> =
  () => async (dispatch: Dispatch<ISignInSuccess>) => {
    try {
      await auth
        .signInWithPopup(GoogleProvider)
        .then(result => {
          dispatch({
            type: UserActionTypes.SIGN_IN_SUCCESS,
            payload: true,
          });
        })
        .catch(err => {});
    } catch (error) {
      console.log(error);
    }
  };

export const resetAuthForm: ActionCreator<ThunkAction<void, IResetAuthForm, unknown, AnyAction>> =
  () => (dispatch: Dispatch<IResetAuthForm>) => {
    dispatch({
      type: UserActionTypes.RESET_AUTH_FORM,
    });
  };
