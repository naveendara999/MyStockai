import { put, call, take } from "redux-saga/effects";
import * as actionCreators from "../actions/favStockActions";
import { httpGet, httpPost } from "../../services";

function* getFavStockListdata(payload) {
  try {
    yield put(actionCreators.getFavStockListLoadingAction());
    const data = yield httpPost(
      `https://mystockaibackend.azurewebsites.net/list_favourite`,
      {
        emailid: `${payload}`,
      }
    );
    yield put(actionCreators.getFavStockListSuccessAction(data));
  } catch (error) {
    yield put(
      actionCreators.getFavStockListErrorAction(error.response.data.error)
    );
  }
}

function* addStockInFav(payload) {
  try {
    yield put(actionCreators.addFavStockListLoadingAction());
    const data = yield httpPost(
      `https://mystockaibackend.azurewebsites.net/add_favourite`,
      {
        emailid: `${payload.email}`,
        symbol: `${payload.stock}`,
      }
    );
    yield put(actionCreators.addFavStockListSuccessAction(data));
  } catch (error) {
    yield put(
      actionCreators.addFavStockListErrorAction(error.response.data.error)
    );
  }
}

function* removeStockInFav(payload) {
  try {
    yield put(actionCreators.removeFavStockListLoadingAction());
    const data = yield httpPost(
      `https://mystockaibackend.azurewebsites.net/remove_favourite`,
      {
        emailid: `${payload.email}`,
        symbol: `${payload.stock}`,
      }
    );
    yield put(actionCreators.removeFavStockListSuccessAction(data));
  } catch (error) {
    yield put(
      actionCreators.removeFavStockListErrorAction(error.response.data.error)
    );
  }
}

export function* watchGetFavStockList() {
  while (true) {
    const { payload } = yield take(
      actionCreators.Actions.GET_FAV_STOCK_LIST_DATA
    );
    yield call(getFavStockListdata, payload);
  }
}

export function* watchAddFavStock() {
  while (true) {
    const { payload } = yield take(
      actionCreators.Actions.ADD_FAV_STOCK_LIST_DATA
    );
    yield call(addStockInFav, payload);
  }
}

export function* watchRemoveFavStock() {
  while (true) {
    const { payload } = yield take(
      actionCreators.Actions.REMOVE_FAV_STOCK_LIST_DATA
    );
    yield call(removeStockInFav, payload);
  }
}
