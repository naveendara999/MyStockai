import { LOGIN, LOGOUT } from '../actions/actionTypes';

export const loginReducer = (state = { login: false }, action) => {
  switch (action.type) {
    case LOGIN:
      return { login: true };

    case LOGOUT:
      return { login: false };

    default:
      return state;
  }
};
