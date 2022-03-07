import * as actions from "../actionCreators/ActionTypes";

const reducer = (state = null, action) => {
  if (action.type === actions.USER_LOGGED) {
    state = action.payload;
  }
  return state;
};
export default reducer;
