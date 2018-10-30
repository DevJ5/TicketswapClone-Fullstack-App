import { combineReducers } from 'redux';
import events from './events';
import signup from './signup';
import login from './login';
import currentUser from './currentUser';

export default combineReducers({
  events,
  signup,
  login,
  currentUser
});
