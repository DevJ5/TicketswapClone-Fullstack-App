import { SET_EVENT } from '../actions/events';

import { ADD_TICKET } from '../actions/tickets';

export default (state = null, action = {}) => {
  switch (action.type) {
    case SET_EVENT:
      return action.payload;
    case ADD_TICKET:
      return { ...state, tickets: [...state.tickets, action.payload] };
    default:
      return state;
  }
};
