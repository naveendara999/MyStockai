import {
  errorAction,
  loadingAction,
  successSideEffectState,
  SideEffectSchema,
} from ".";

export const Actions = {
  // get User Acto\ions
  GET_STOCK_HISTORICAL_DATA: "GET_STOCK_HISTORICAL_DATA",
  GET_STOCK_HISTORICAL_DATA_ERROR: "GET_STOCK_HISTORICAL_DATA_IS_ERROR",
  GET_STOCK_HISTORICAL_DATA_LOADING: "GET_STOCK_HISTORICAL_DATA_IS_LOADING",
  GET_STOCK_HISTORICAL_DATA_SUCCESS: "GET_STOCK_HISTORICAL_DATA_IS_SUCCESS",

  // put stock User Actions
  GET_STOCK_FUTURE_DATA: "GET_STOCK_FUTURE_DATA",
  GET_STOCK_FUTURE_DATA_ERROR: "GET_STOCK_FUTURE_DATA_IS_ERROR",
  GET_STOCK_FUTURE_DATA_LOADING: "GET_STOCK_FUTURE_DATA_IS_LOADING",
  GET_STOCK_FUTURE_DATA_SUCCESS: "GET_STOCK_FUTURE_DATA_IS_SUCCESS",
};

export const getStockHistoricalAction = (stock) => {
  return {
    type: Actions.GET_STOCK_HISTORICAL_DATA,
    payload: stock,
  };
};
export const getStockHistoricalLoadingAction = () =>
  loadingAction(Actions.GET_STOCK_HISTORICAL_DATA_LOADING);
export const getStockHistoricalErrorAction = (error) =>
  errorAction(Actions.GET_STOCK_HISTORICAL_DATA_ERROR, error);
export const getStockHistoricalSuccessAction = (data) => {
  const payload = {
    ...successSideEffectState,
    data: data,
  };
  return {
    type: Actions.GET_STOCK_HISTORICAL_DATA_SUCCESS,
    payload: payload,
  };
};

export const getStockFutureAction = (stock) => {
  return {
    type: Actions.GET_STOCK_FUTURE_DATA,
    payload: stock,
  };
};
export const getStockFutureLoadingAction = () =>
  loadingAction(Actions.GET_STOCK_FUTURE_DATA_LOADING);
export const getStockFutureErrorAction = (error) =>
  errorAction(Actions.GET_STOCK_FUTURE_DATA_ERROR, error);
export const getStockFutureSuccessAction = (data) => {
  const payload = {
    ...data,
    ...successSideEffectState,
  };
  return {
    type: Actions.GET_STOCK_FUTURE_DATA_SUCCESS,
    payload: payload,
  };
};
