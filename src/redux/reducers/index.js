import { combineReducers, Action } from "redux";
import appReducer from "./appReducer";
import authReducer, { loginReducer } from "./authReducer";
import favStockReducer from "./favStockReducer";
import stockHisFutureReducer from "./stockHisFutureReducer";
import stockListReducer from "./stockListReducer";

const rootReducer = combineReducers({
  appData: appReducer,
  authData: authReducer,
  stockListData: stockListReducer,
  favStockData: favStockReducer,
  stockHisFutureData: stockHisFutureReducer,
});

export default rootReducer;
