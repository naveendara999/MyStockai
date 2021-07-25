import { Actions } from "./../actions/appActions";
import { combineReducers } from "redux";

const initialLoginState = {
  search: "",
};

export function appReducer(state = initialLoginState, action) {
  switch (action.type) {
    case Actions.SET_SEARCH:
      return {
        ...state,
        search: action.payload,
      };
    default:
      return state;
  }
}

export default appReducer;
