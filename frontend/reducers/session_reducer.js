const _nullSession = {
  currentUser: {},
  errors: []
};

const SessionReducer = (state = _nullSession, action) => {
  Object.freeze(state);
  let newState;
  switch(action.type) {
    default:
      return state;
  }
};

export default SessionReducer;
