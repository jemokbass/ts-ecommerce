import { all, call } from "redux-saga/effects";
import { userSagas } from "./user.sagas";
import { productsSagas } from "./product.sagas";

export function* rootSaga() {
  yield all([call(userSagas), call(productsSagas)]);
}
