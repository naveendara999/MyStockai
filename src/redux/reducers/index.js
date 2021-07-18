import { combineReducers, Action } from "redux";
import authReducer, { loginReducer } from "./authReducer";

const rootReducer = combineReducers({
  authData: authReducer,
});

export default rootReducer;
