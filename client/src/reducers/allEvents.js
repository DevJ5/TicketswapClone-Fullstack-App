import { SET_EVENTS, ADD_EVENT } from '../actions/events';

export default (state = null, action = {}) => {
  switch (action.type) {
    case SET_EVENTS:
      return action.payload;

    case ADD_EVENT:
      return [...state, action.payload];
    default:
      return state;
  }
};
