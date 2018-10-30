import { ADD_USER } from '../actions/users';

const initState = {
  data: [{ name: 'ryu' }, { name: 'cilia' }, { name: 'robby' }]
};

export default (state = initState, action = {}) => {
  switch (action.type) {
    case ADD_USER:
      return action.payload;
    default:
      return state;
  }
};
