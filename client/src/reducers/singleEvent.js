import { SET_EVENT } from '../actions/events';
import { ADD_TICKET, ADD_RISK } from '../actions/tickets';
import calculateRisk from '../lib/fraudCalculation';

export default (state = null, action = {}) => {
  switch (action.type) {
    case SET_EVENT:
      return action.payload;
    case ADD_TICKET:
      return { ...state, tickets: [...state.tickets, action.payload] };
    case ADD_RISK:
      return {
        ...state,
        tickets: state.tickets.map(ticket => ({
          ...ticket,
          risk: calculateRisk(
            action.payload,
            ticket.user.id,
            ticket.price,
            ticket.createdAt,
            ticket.comments
          )
        }))
      };
    default:
      return state;
  }
};
