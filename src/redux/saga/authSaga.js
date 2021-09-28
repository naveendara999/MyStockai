import { put, call, take } from "redux-saga/effects";
import * as actionCreators from "../actions/authActions";
import { httpGet, httpPost } from "../../services";

function* onLogindata(payload) {
  try {
    yield put(actionCreators.loginLoadingAction());
    const data = yield httpPost(
      `https://mystockaibackend.azurewebsites.net/login`,
      {
        emailid: payload.email,
        password_: payload.password,
      }
    );

    yield put(actionCreators.loginSuccessAction(data));
  } catch (error) {
    yield put(actionCreators.loginErrorAction(error));
  }
}

function* onSignUpdata(payload) {
  try {
    yield put(actionCreators.signupLoadingAction());
    const data = yield httpPost(
      `https://mystockaibackend.azurewebsites.net/register`,
      {
        LastName: payload.account.lastname,
        FirstName: payload.account.firstname,
        // Age: payload.account.age,
        emailid: payload.account.email,
        password_: payload.account.password,
        phoneno: payload.account.phonenumber,
        subscribed: 0,
        sub_start: Date(),
        sub_end: Date(),
      }
    );

    yield put(actionCreators.signupSuccessAction(data));
  } catch (error) {
    yield put(actionCreators.signupErrorAction(error));
  }
}

function* onPasswordResetdata(payload) {
  try {
    yield put(actionCreators.passwordResetLoadingAction());
    const data = yield httpPost(
      `https://mystockaibackend.azurewebsites.net/update_password`,
      {
        tomailid: payload.data.email,
        reset_password: payload.data.pass,
        new_password: payload.data.confirmPass,
      }
    );

    yield put(actionCreators.passwordResetSuccessAction(data));
  } catch (error) {
    yield put(actionCreators.passwordResetErrorAction(error));
  }
}

function* onEmailVerificationdata(payload) {
  try {
    yield put(actionCreators.emailVerificationLoadingAction());
    const data = yield httpPost(
      `https://mystockaibackend.azurewebsites.net/reset_password`,
      {
        tomailid: payload.email,
      }
    );

    yield put(actionCreators.emailVerificationSuccessAction(data));
  } catch (error) {
    yield put(actionCreators.emailVerificationErrorAction(error));
  }
}

export function* watchLogin() {
  while (true) {
    const { payload } = yield take(actionCreators.Actions.LOGIN_DATA);
    yield call(onLogindata, payload);
  }
}

export function* watchSignUp() {
  while (true) {
    const { payload } = yield take(actionCreators.Actions.SIGNUP_DATA);
    yield call(onSignUpdata, payload);
  }
}

export function* watchPasswordReset() {
  while (true) {
    const { payload } = yield take(actionCreators.Actions.PASSWORD_RESET_DATA);
    yield call(onPasswordResetdata, payload);
  }
}

export function* watchEmailVerification() {
  while (true) {
    const { payload } = yield take(
      actionCreators.Actions.EMAIL_VERIFICATION_DATA
    );
    yield call(onEmailVerificationdata, payload);
  }
}
