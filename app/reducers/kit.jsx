let initialState = {
  kit: null
}

//constants
const SET_KIT = 'SET_KIT';

//reducer
const kitReducer = (prevState = initialState, action) => {
  const nextState = Object.assign({}, prevState);

  switch (action.type) {
  case SET_KIT:
    nextState.kit = action.kit;
    break;
  default:
    return prevState;
  }
    return nextState;
}

//action creators
export const setKit = (kit) => {
  return {
    type: SET_KIT,
    kit
  }
}

export default kitReducer;
