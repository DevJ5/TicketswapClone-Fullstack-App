import { SET_TICKETS } from '../actions/tickets';

export default (state = null, action = {}) => {
  switch (action.type) {
    case SET_TICKETS:
      return action.payload;

    default:
      return state;
  }
};
