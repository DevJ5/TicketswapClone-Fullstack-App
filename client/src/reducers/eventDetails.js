import { SET_EVENT } from '../actions/events';

export default (state = null, action = {}) => {
  switch (action.type) {
    case SET_EVENT:
      return action.payload;
    default:
      return state;
  }
};
