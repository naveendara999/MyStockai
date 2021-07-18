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
    console.log("data", data);
    yield put(actionCreators.loginSuccessAction(data));
  } catch (error) {
    yield put(actionCreators.loginErrorAction(error.response.data.error));
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
        Age: payload.account.age,
        emailid: payload.account.email,
        password_: payload.account.password,
        phoneno: payload.account.phonenumber,
        subscribed: 0,
        sub_start: Date(),
        sub_end: Date(),
      }
    );
    console.log("data", data);
    yield put(actionCreators.signupSuccessAction(data));
  } catch (error) {
    yield put(actionCreators.signupErrorAction(error.response.data.error));
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
