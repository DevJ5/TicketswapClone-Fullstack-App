import { SET_TICKET } from '../actions/tickets';
import { ADD_COMMENT } from '../actions/comments';

export default (state = null, action = {}) => {
  switch (action.type) {
    case SET_TICKET:
      return action.payload;
    case ADD_COMMENT:
      return { ...state, comments: [...state.comments, action.payload] };
    default:
      return state;
  }
};
