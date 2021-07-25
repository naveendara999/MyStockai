export const Actions = {
  SET_SEARCH: "SET_SEARCH",
};

export const searchAction = (search) => {
  return {
    type: Actions.SET_SEARCH,
    payload: search,
  };
};
