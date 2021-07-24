import { combineReducers, Action } from "redux";
import authReducer, { loginReducer } from "./authReducer";
import stockListReducer from "./stockListReducer";

const rootReducer = combineReducers({
  authData: authReducer,
  stockListData: stockListReducer,
});

export default rootReducer;
