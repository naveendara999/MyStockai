export const successSideEffectState = {
  isLoading: false,
  isSuccess: true,
  isError: false,
  error: "",
};

// Action Creators
export const loadingAction = (type, data = {}) => {
  return {
    type,
    payload: {
      isLoading: true,
      isSuccess: false,
      isError: false,
      error: "",
      ...data,
    },
  };
};

export const errorAction = (type, error, data = {}) => {
  return {
    type,
    payload: {
      isLoading: false,
      isSuccess: false,
      isError: true,
      error,
      ...data,
    },
  };
};

export const generateConst = (constName, consts) => {
  const newObj = {};
  for (let key of consts) {
    newObj[key] = `${constName}_${key}`;
    newObj[`${key}_LOADING`] = `${constName}_${key}_LOADING`;
    newObj[`${key}_SUCCESS`] = `${constName}_${key}_SUCCESS`;
    newObj[`${key}_ERROR`] = `${constName}_${key}_ERROR`;
  }
  return newObj;
};
//export const ActionsRoot = {...AuthAction,...UserAction};
