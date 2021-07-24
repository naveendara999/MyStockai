import { all } from "redux-saga/effects";
import { watchLogin, watchSignUp } from "./authSaga";
import { watchgetStockList } from "./stockListSaga";

function* rootSaga() {
  yield all([watchLogin(), watchSignUp(), watchgetStockList()]);
}
export default rootSaga;
