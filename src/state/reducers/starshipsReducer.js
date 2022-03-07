import * as actions from "../actionCreators/ActionTypes";

const reducer = (state = [], action) => {
  if (action.type === actions.STARSHIPS_RECEIVED) {
    state = action.payload;
  }
  return state;
};

export default reducer;
