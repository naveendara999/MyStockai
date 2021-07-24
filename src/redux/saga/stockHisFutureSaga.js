import { put, call, take } from "redux-saga/effects";
import * as actionCreators from "../actions/stockHisFutureActions";
import { httpGet, httpPost } from "../../services";

function* getStockHistorical(payload) {
  try {
    yield put(actionCreators.getStockHistoricalLoadingAction());
    const data = yield httpPost(
      `https://mystockaibackend.azurewebsites.net/historical_data`,
      {
        symbol: payload,
      }
    );
    console.log("data", data);
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
    console.log("data", data);
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
