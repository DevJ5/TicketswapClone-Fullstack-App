import { combineReducers } from 'redux';
import events from './events';
import signup from './signup';

export default combineReducers({
  events,
  signup
});
