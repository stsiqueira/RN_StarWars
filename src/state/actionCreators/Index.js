import * as actions from "./ActionTypes";

export const userLogin = (user) => {
  return (dispatch) => {
    dispatch({
      type: actions.USER_LOGGED,
      payload: user,
    });
  };
};

export const savePilots = (pilots) => {
  return (dispatch) => {
    dispatch({
      type: actions.PILOTS_RECEIVED,
      payload: pilots,
    });
  };
};

export const saveStarships = (starships) => {
  return (dispatch) => {
    dispatch({
      type: actions.STARSHIPS_RECEIVED,
      payload: starships,
    });
  };
};
