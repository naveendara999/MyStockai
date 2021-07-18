import { all } from "redux-saga/effects";
import { watchLogin, watchSignUp } from "./authSaga";

function* rootSaga() {
  yield all([watchLogin(), watchSignUp()]);
}
export default rootSaga;
