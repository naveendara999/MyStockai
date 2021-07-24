import { Actions } from "./../actions/favStockActions";
import { combineReducers } from "redux";

const initialFavStockListState = {};

export function getFavStockReducer(state = initialFavStockListState, action) {
  switch (action.type) {
    case Actions.GET_FAV_STOCK_LIST_DATA_LOADING:
    case Actions.GET_FAV_STOCK_LIST_DATA_ERROR:
    case Actions.GET_FAV_STOCK_LIST_DATA_SUCCESS:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
}

const initialPutFavStockState = {};

export function putFavStockReducer(state = initialPutFavStockState, action) {
  switch (action.type) {
    case Actions.ADD_FAV_STOCK_LIST_DATA_LOADING:
    case Actions.ADD_FAV_STOCK_LIST_DATA_ERROR:
    case Actions.ADD_FAV_STOCK_LIST_DATA_SUCCESS:
    case Actions.REMOVE_FAV_STOCK_LIST_DATA_LOADING:
    case Actions.REMOVE_FAV_STOCK_LIST_DATA_ERROR:
    case Actions.REMOVE_FAV_STOCK_LIST_DATA_SUCCESS:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
}

const favStockReducer = combineReducers({
  getFavData: getFavStockReducer,
  putFavData: putFavStockReducer,
});
export default favStockReducer;
