import { Actions } from "./../actions/authActions";
import * as appActions from "./../actions/appActions";
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

const initialPasswordResetState = {};

export function passwordResetReducer(
  state = initialPasswordResetState,
  action
) {
  switch (action.type) {
    case Actions.PASSWORD_RESET_DATA_LOADING:
    case Actions.PASSWORD_RESET_DATA_ERROR:
    case Actions.PASSWORD_RESET_DATA_SUCCESS:
      return {
        ...state,
        ...action.payload,
      };
    case appActions.Actions.CLEAR_REDUCER:
      return {
        ...action.payload,
      };
    default:
      return state;
  }
}

const initialEmailVerificationState = {};

export function emailVerificationReducer(
  state = initialEmailVerificationState,
  action
) {
  switch (action.type) {
    case Actions.EMAIL_VERIFICATION_DATA_LOADING:
    case Actions.EMAIL_VERIFICATION_DATA_ERROR:
    case Actions.EMAIL_VERIFICATION_DATA_SUCCESS:
      return {
        ...state,
        ...action.payload,
      };
    case appActions.Actions.CLEAR_REDUCER:
      return {
        ...action.payload,
      };
    default:
      return state;
  }
}

const authReducer = combineReducers({
  loginData: loginReducer,
  signupData: signupReducer,
  passwordResetData: passwordResetReducer,
  emailVerificationData: emailVerificationReducer,
});
export default authReducer;
