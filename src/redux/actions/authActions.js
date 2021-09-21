import {
  errorAction,
  loadingAction,
  successSideEffectState,
  SideEffectSchema,
} from ".";

export const Actions = {
  // Login User Acto\ions
  LOGIN_DATA: "LOGIN_DATA",
  LOGIN_DATA_ERROR: "LOGIN_DATA_IS_ERROR",
  LOGIN_DATA_LOADING: "LOGIN_DATA_IS_LOADING",
  LOGIN_DATA_SUCCESS: "LOGIN_DATA_IS_SUCCESS",

  // SignUp User Actions
  SIGNUP_DATA: "SIGNUP_DATA",
  SIGNUP_DATA_ERROR: "SIGNUP_DATA_IS_ERROR",
  SIGNUP_DATA_LOADING: "SIGNUP_DATA_IS_LOADING",
  SIGNUP_DATA_SUCCESS: "SIGNUP_DATA_IS_SUCCESS",

  // Password Reset User Actions
  PASSWORD_RESET_DATA: "PASSWORD_RESET_DATA",
  PASSWORD_RESET_DATA_ERROR: "PASSWORD_RESET_DATA_IS_ERROR",
  PASSWORD_RESET_DATA_LOADING: "PASSWORD_RESET_DATA_IS_LOADING",
  PASSWORD_RESET_DATA_SUCCESS: "PASSWORD_RESET_DATA_IS_SUCCESS",

  // SignUp User Actions
  EMAIL_VERIFICATION_DATA: "EMAIL_VERIFICATION_DATA",
  EMAIL_VERIFICATION_DATA_ERROR: "EMAIL_VERIFICATION_DATA_IS_ERROR",
  EMAIL_VERIFICATION_DATA_LOADING: "EMAIL_VERIFICATION_DATA_IS_LOADING",
  EMAIL_VERIFICATION_DATA_SUCCESS: "EMAIL_VERIFICATION_DATA_IS_SUCCESS",
};

export const loginAction = (email, password) => {
  return {
    type: Actions.LOGIN_DATA,
    payload: { email, password },
  };
};
export const loginLoadingAction = () =>
  loadingAction(Actions.LOGIN_DATA_LOADING);
export const loginErrorAction = (error) =>
  errorAction(Actions.LOGIN_DATA_ERROR, error);
export const loginSuccessAction = (data) => {
  const payload = {
    ...data,
    ...successSideEffectState,
  };
  return {
    type: Actions.LOGIN_DATA_SUCCESS,
    payload: payload,
  };
};

export const signupAction = (account = {}) => {
  return {
    type: Actions.SIGNUP_DATA,
    payload: { account },
  };
};
export const signupLoadingAction = () =>
  loadingAction(Actions.SIGNUP_DATA_LOADING);
export const signupErrorAction = (error) =>
  errorAction(Actions.SIGNUP_DATA_ERROR, error);
export const signupSuccessAction = (data) => {
  const payload = {
    ...data,
    ...successSideEffectState,
  };
  return {
    type: Actions.SIGNUP_DATA_SUCCESS,
    payload: payload,
  };
};

export const passwordResetAction = (data = {}) => {
  return {
    type: Actions.PASSWORD_RESET_DATA,
    payload: { data },
  };
};
export const passwordResetLoadingAction = () =>
  loadingAction(Actions.PASSWORD_RESET_DATA_LOADING);
export const passwordResetErrorAction = (error) =>
  errorAction(Actions.PASSWORD_RESET_DATA_ERROR, error);
export const passwordResetSuccessAction = (data) => {
  const payload = {
    ...data,
    ...successSideEffectState,
  };
  return {
    type: Actions.PASSWORD_RESET_DATA_SUCCESS,
    payload: payload,
  };
};

export const emailVerificationAction = (email) => {
  return {
    type: Actions.EMAIL_VERIFICATION_DATA,
    payload: { email },
  };
};
export const emailVerificationLoadingAction = () =>
  loadingAction(Actions.EMAIL_VERIFICATION_DATA_LOADING);
export const emailVerificationErrorAction = (error) =>
  errorAction(Actions.EMAIL_VERIFICATION_DATA_ERROR, error);
export const emailVerificationSuccessAction = (data) => {
  const payload = {
    ...data,
    ...successSideEffectState,
  };
  return {
    type: Actions.EMAIL_VERIFICATION_DATA_SUCCESS,
    payload: payload,
  };
};
