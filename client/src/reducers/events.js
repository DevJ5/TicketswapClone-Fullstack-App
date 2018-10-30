import { SET_EVENTS } from '../actions/events';

export default (state = null, action = {}) => {
  switch (action.type) {
    case SET_EVENTS:
      return action.payload;
    default:
      return state;
  }
};
