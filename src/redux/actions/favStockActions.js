import {
  errorAction,
  loadingAction,
  successSideEffectState,
  SideEffectSchema,
} from ".";

export const Actions = {
  // get User Acto\ions
  GET_FAV_STOCK_LIST_DATA: "GET_FAV_STOCK_LIST_DATA",
  GET_FAV_STOCK_LIST_DATA_ERROR: "GET_FAV_STOCK_LIST_DATA_IS_ERROR",
  GET_FAV_STOCK_LIST_DATA_LOADING: "GET_FAV_STOCK_LIST_DATA_IS_LOADING",
  GET_FAV_STOCK_LIST_DATA_SUCCESS: "GET_FAV_STOCK_LIST_DATA_IS_SUCCESS",

  // put stock User Actions
  ADD_FAV_STOCK_LIST_DATA: "ADD_FAV_STOCK_LIST_DATA",
  ADD_FAV_STOCK_LIST_DATA_ERROR: "ADD_FAV_STOCK_LIST_DATA_IS_ERROR",
  ADD_FAV_STOCK_LIST_DATA_LOADING: "ADD_FAV_STOCK_LIST_DATA_IS_LOADING",
  ADD_FAV_STOCK_LIST_DATA_SUCCESS: "ADD_FAV_STOCK_LIST_DATA_IS_SUCCESS",

  // put stock User Actions
  REMOVE_FAV_STOCK_LIST_DATA: "REMOVE_FAV_STOCK_LIST_DATA",
  REMOVE_FAV_STOCK_LIST_DATA_ERROR: "REMOVE_FAV_STOCK_LIST_DATA_IS_ERROR",
  REMOVE_FAV_STOCK_LIST_DATA_LOADING: "REMOVE_FAV_STOCK_LIST_DATA_IS_LOADING",
  REMOVE_FAV_STOCK_LIST_DATA_SUCCESS: "REMOVE_FAV_STOCK_LIST_DATA_IS_SUCCESS",
};

export const getFavStockListAction = (email) => {
  return {
    type: Actions.GET_FAV_STOCK_LIST_DATA,
    payload: email,
  };
};
export const getFavStockListLoadingAction = () =>
  loadingAction(Actions.GET_FAV_STOCK_LIST_DATA_LOADING);
export const getFavStockListErrorAction = (error) =>
  errorAction(Actions.GET_FAV_STOCK_LIST_DATA_ERROR, error);
export const getFavStockListSuccessAction = (data) => {
  const payload = {
    ...data,
    ...successSideEffectState,
  };
  return {
    type: Actions.GET_FAV_STOCK_LIST_DATA_SUCCESS,
    payload: payload,
  };
};

export const addFavStockListAction = (email, data = {}) => {
  return {
    type: Actions.ADD_FAV_STOCK_LIST_DATA,
    payload: { email, data },
  };
};
export const addFavStockListLoadingAction = () =>
  loadingAction(Actions.ADD_FAV_STOCK_LIST_DATA_LOADING);
export const addFavStockListErrorAction = (error) =>
  errorAction(Actions.ADD_FAV_STOCK_LIST_DATA_ERROR, error);
export const addFavStockListSuccessAction = (data) => {
  const payload = {
    ...data,
    ...successSideEffectState,
  };
  return {
    type: Actions.ADD_FAV_STOCK_LIST_DATA_SUCCESS,
    payload: payload,
  };
};

export const removeFavStockListAction = (email, data = {}) => {
  return {
    type: Actions.REMOVE_FAV_STOCK_LIST_DATA,
    payload: { email, data },
  };
};
export const removeFavStockListLoadingAction = () =>
  loadingAction(Actions.REMOVE_FAV_STOCK_LIST_DATA_LOADING);
export const removeFavStockListErrorAction = (error) =>
  errorAction(Actions.REMOVE_FAV_STOCK_LIST_DATA_ERROR, error);
export const removeFavStockListSuccessAction = (data) => {
  const payload = {
    ...data,
    ...successSideEffectState,
  };
  return {
    type: Actions.REMOVE_FAV_STOCK_LIST_DATA_SUCCESS,
    payload: payload,
  };
};
