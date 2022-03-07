import * as actions from './ActionTypes';

export const userLogin = (user) => {
  return (dispatch) => {
    dispatch({
      type: actions.USER_LOGGED,
      payload: user,
    });
  };
};

