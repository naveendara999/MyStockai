import { put, call, take } from "redux-saga/effects";
import * as actionCreators from "../actions/stockHisFutureActions";
import { httpGet, httpPost } from "../../services";

function* getStockHistorical(payload) {
  try {
    yield put(actionCreators.getStockHistoricalLoadingAction());
    const data = yield httpPost(
      `https://mystockaibackend.azurewebsites.net/stock_data`,
      {
        symbol: payload,
      }
    );
    data.forEach(arr => {
      arr.predicted_price == 'NULL' ? arr.predicted_price = null : arr.predicted_price = arr.predicted_price.toFixed(2);
      arr.open == 'NULL' ? arr.open = null : arr.open = arr.open.toFixed(2);
    });
    yield put(actionCreators.getStockHistoricalSuccessAction(data));
  } catch (error) {
    yield put(
      actionCreators.getStockHistoricalErrorAction(error.response.data.error)
    );
  }
}

function* getStockFuture(payload) {
  try {
    yield put(actionCreators.getStockFutureLoadingAction());
    const data = yield httpPost(
      `https://mystockaibackend.azurewebsites.net/future`,
      {
        symbol: payload,
      }
    );
    console.log("data===>> future Data", payload, data);
    yield put(actionCreators.getStockFutureSuccessAction(data));
  } catch (error) {
    yield put(
      actionCreators.getStockFutureErrorAction(error.response.data.error)
    );
  }
}

export function* watchStockHistorical() {
  while (true) {
    const { payload } = yield take(
      actionCreators.Actions.GET_STOCK_HISTORICAL_DATA
    );
    yield call(getStockHistorical, payload);
  }
}

export function* watchStockFuture() {
  while (true) {
    const { payload } = yield take(
      actionCreators.Actions.GET_STOCK_FUTURE_DATA
    );
    yield call(getStockFuture, payload);
  }
}
