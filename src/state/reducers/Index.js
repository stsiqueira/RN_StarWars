import { combineReducers } from 'redux';
import user from './userReducer';
import pilots from './pilotsReducer'
import starships from './starshipsReducer'

const reducers = combineReducers({
  user,
  pilots,
  starships
});
export default reducers;
