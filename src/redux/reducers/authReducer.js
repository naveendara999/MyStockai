import { Actions } from "./../actions/authActions";
import { combineReducers } from "redux";

const initialLoginState = {};

export function loginReducer(state = initialLoginState, action) {
  switch (action.type) {
    case Actions.LOGIN_DATA_LOADING:
    case Actions.LOGIN_DATA_ERROR:
    case Actions.LOGIN_DATA_SUCCESS:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
}

const initialSignupState = {};

export function signupReducer(state = initialSignupState, action) {
  switch (action.type) {
    case Actions.SIGNUP_DATA_LOADING:
    case Actions.SIGNUP_DATA_ERROR:
    case Actions.SIGNUP_DATA_SUCCESS:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
}

const authReducer = combineReducers({
  loginData: loginReducer,
  signupData: signupReducer,
});
export default authReducer;
