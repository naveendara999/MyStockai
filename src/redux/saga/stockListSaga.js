import { put, call, take } from "redux-saga/effects";
import * as actionCreators from "../actions/stockListActions";
import { httpGet, httpPost } from "../../services";

function* getStockListdata(payload) {
  try {
    yield put(actionCreators.stockListLoadingAction());
    const data = yield httpGet(
      `https://mystockaibackend.azurewebsites.net/stocks_list`
    );
    yield put(actionCreators.stockListSuccessAction(data));
  } catch (error) {
    yield put(actionCreators.stockListErrorAction(error.response.data.error));
  }
}

export function* watchgetStockList() {
  while (true) {
    const { payload } = yield take(actionCreators.Actions.STOCK_LIST_DATA);
    yield call(getStockListdata, payload);
  }
}
