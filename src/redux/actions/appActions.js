export const Actions = {
  SET_SEARCH: "SET_SEARCH",
  CLEAR_REDUCER: "CLEAR_REDUCER",
};

export const searchAction = (search) => {
  return {
    type: Actions.SET_SEARCH,
    payload: search,
  };
};

export const clearReducerAction = () => {
  return {
    type: Actions.CLEAR_REDUCER,
    payload: {},
  };
};
