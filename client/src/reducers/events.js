const initState = {
  data: [{ name: 'ryu' }, { name: 'cilia' }, { name: 'robby' }]
};

export default (state = initState, action = {}) => {
  switch (action.type) {
    case 'ADD_STUFF':
      return action.payload;
    default:
      return state;
  }
};
