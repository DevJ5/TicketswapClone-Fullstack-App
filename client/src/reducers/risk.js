import { SET_RISK } from '../actions/tickets';

export default (state = null, action = {}) => {
  switch (action.type) {
    case SET_RISK:
      return action.payload;
    default:
      return state;
  }
};
