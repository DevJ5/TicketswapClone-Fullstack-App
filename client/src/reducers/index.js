import { combineReducers } from 'redux';
import allEvents from './allEvents';
import signup from './signup';
import login from './login';
import currentUser from './currentUser';
import singleEvent from './singleEvent';
import ticketDetails from './ticketDetails';
import risk from './risk';

export default combineReducers({
  allEvents,
  signup,
  login,
  currentUser,
  singleEvent,
  ticketDetails,
  risk
});
