import { Actions } from "./../actions/stockListActions";
import { combineReducers } from "redux";

const initialStockListState = {};

export function stockListReducer(state = initialStockListState, action) {
  switch (action.type) {
    case Actions.STOCK_LIST_DATA_LOADING:
    case Actions.STOCK_LIST_DATA_ERROR:
    case Actions.STOCK_LIST_DATA_SUCCESS:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
}

export default stockListReducer;
