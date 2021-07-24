import { all } from "redux-saga/effects";
import { watchLogin, watchSignUp } from "./authSaga";
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
    watchgetStockList(),
    watchGetFavStockList(),
    watchAddFavStock(),
    watchRemoveFavStock(),
    watchStockHistorical(),
    watchStockFuture(),
  ]);
}
export default rootSaga;
