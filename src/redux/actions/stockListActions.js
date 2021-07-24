import {
  errorAction,
  loadingAction,
  successSideEffectState,
  SideEffectSchema,
} from ".";

export const Actions = {
  // Login User Actions
  STOCK_LIST_DATA: "STOCK_LIST_DATA",
  STOCK_LIST_DATA_ERROR: "STOCK_LIST_DATA_IS_ERROR",
  STOCK_LIST_DATA_LOADING: "STOCK_LIST_DATA_IS_LOADING",
  STOCK_LIST_DATA_SUCCESS: "STOCK_LIST_DATA_IS_SUCCESS",
};

export const stockListAction = () => {
  return {
    type: Actions.STOCK_LIST_DATA,
  };
};
export const stockListLoadingAction = () =>
  loadingAction(Actions.STOCK_LIST_DATA_LOADING);
export const stockListErrorAction = (error) =>
  errorAction(Actions.STOCK_LIST_DATA_ERROR, error);
export const stockListSuccessAction = (data) => {
  const payload = {
    ...data,
    ...successSideEffectState,
  };
  return {
    type: Actions.STOCK_LIST_DATA_SUCCESS,
    payload: payload,
  };
};
