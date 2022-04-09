import { takeLatest, call, all, put } from "redux-saga/effects";
import {
  UserActionTypes,
  ISignInStart,
  ICurrentUser,
  ISignUpStart,
  IResetPasswordStart,
} from "../../utils/types/user.types";
import { auth, handleUserProfile, getCurrentUser, GoogleProvider } from "../../utils/firebase/utils.firebase";
import { signInSuccess, signOutSuccess, userError, resetPasswordSuccess } from "../actions/user.actions";
import { handleResetPasswordAPI } from "../../utils/helpers/user.helpers";

export function* getSnapshotFromUserAuth(
  user: Promise<ICurrentUser | null | {}>,
  additionalData = {}
): Generator | ICurrentUser {
  try {
    const userRef: ReturnType<typeof handleUserProfile | any> = yield call(handleUserProfile, {
      userAuth: user,
      additionalData,
    });
    const snapshot = yield userRef.get();

    yield put(
      signInSuccess({
        id: snapshot.id,
        ...snapshot.data(),
      })
    );
  } catch (error) {}
}

export function* signIn({ payload: { email, password } }: ISignInStart) {
  try {
    const { user } = yield auth.signInWithEmailAndPassword(email, password);

    yield getSnapshotFromUserAuth(user);
  } catch (error) {
    console.log(error);
  }
}

export function* onSignInStart() {
  yield takeLatest(UserActionTypes.SIGN_IN_START, signIn);
}

export function* isUserAuth() {
  try {
    const userAuth: ReturnType<typeof getCurrentUser> = yield getCurrentUser();

    if (!isUserAuth) return;
    yield getSnapshotFromUserAuth(userAuth);
  } catch (error) {
    console.log(error);
  }
}

export function* onCheckUserSession() {
  yield takeLatest(UserActionTypes.CHECK_USER_SESSION, isUserAuth);
}

export function* signOut() {
  try {
    yield auth.signOut();
    yield put(signOutSuccess());
  } catch (error) {
    console.log(error);
  }
}

export function* onSignOutStart() {
  yield takeLatest(UserActionTypes.SIGN_OUT_START, signOut);
}

export function* signUp({ payload: { displayName, email, password, confirmPassword } }: ISignUpStart) {
  if (password !== confirmPassword) {
    const err = ["Password don't match"];
    yield put(userError(err));
    return;
  }

  try {
    const { user } = yield auth.createUserWithEmailAndPassword(email, password);
    const additionalData = { displayName };

    yield getSnapshotFromUserAuth(user, additionalData);
  } catch (error) {
    console.log(error);
  }
}

export function* onSignUpStart() {
  yield takeLatest(UserActionTypes.SIGN_UP_START, signUp);
}

export function* resetPassword({ payload: { email } }: IResetPasswordStart): Generator {
  try {
    yield call(handleResetPasswordAPI, email);
    yield put(resetPasswordSuccess());
  } catch (error: any) {
    yield put(userError(error));
  }
}

export function* onResetPassword() {
  yield takeLatest(UserActionTypes.RESET_PASSWORD_START, resetPassword);
}

export function* googleSignIn() {
  try {
    const { user } = yield auth.signInWithPopup(GoogleProvider);

    yield getSnapshotFromUserAuth(user);
  } catch (error) {
    console.log(error);
  }
}

export function* onGoogleSignInStart() {
  yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, googleSignIn);
}

export function* userSagas() {
  yield all([
    call(onSignInStart),
    call(onCheckUserSession),
    call(onSignOutStart),
    call(onSignUpStart),
    call(onResetPassword),
    call(onGoogleSignInStart),
  ]);
}
