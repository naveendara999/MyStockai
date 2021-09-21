import { all } from "redux-saga/effects";
import {
  watchEmailVerification,
  watchLogin,
  watchPasswordReset,
  watchSignUp,
} from "./authSaga";
import {
  watchAddFavStock,
  watchGetFavStockList,
  watchRemoveFavStock,
} from "./favStockSaga";
import { watchStockFuture, watchStockHistorical } from "./stockHisFutureSaga";
import { watchgetStockList } from "./stockListSaga";

function* rootSaga() {
  yield all([
    watchLogin(),
    watchSignUp(),
    watchPasswordReset(),
    watchEmailVerification(),
    watchgetStockList(),
    watchGetFavStockList(),
    watchAddFavStock(),
    watchRemoveFavStock(),
    watchStockHistorical(),
    watchStockFuture(),
  ]);
}
export default rootSaga;
