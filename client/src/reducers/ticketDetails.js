import { SET_TICKET } from '../actions/tickets';

export default (state = null, action = {}) => {
  switch (action.type) {
    case SET_TICKET:
      return action.payload;
    default:
      return state;
  }
};
