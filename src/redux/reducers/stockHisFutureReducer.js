import { Actions } from "./../actions/stockHisFutureActions";
import { combineReducers } from "redux";

const initialStockHistoricalState = {};

export function getStockHistoricalReducer(
  state = initialStockHistoricalState,
  action
) {
  switch (action.type) {
    case Actions.GET_STOCK_HISTORICAL_DATA_LOADING:
    case Actions.GET_STOCK_HISTORICAL_DATA_ERROR:
    case Actions.GET_STOCK_HISTORICAL_DATA_SUCCESS:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
}

const initialStockFutureState = {};

export function getStockFutureReducer(state = initialStockFutureState, action) {
  switch (action.type) {
    case Actions.GET_STOCK_FUTURE_DATA_LOADING:
    case Actions.GET_STOCK_FUTURE_DATA_ERROR:
    case Actions.GET_STOCK_FUTURE_DATA_SUCCESS:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
}

const stockHisFutureReducer = combineReducers({
  stockHisData: getStockHistoricalReducer,
  stockFutureData: getStockFutureReducer,
});
export default stockHisFutureReducer;
