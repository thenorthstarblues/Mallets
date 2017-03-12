let initialState = {
  room: null
}

//constants
const SET_ROOM = 'SET_ROOM';

//reducer
const roomReducer = (prevState = initialState, action) => {
  const nextState = Object.assign({}, prevState);

  switch (action.type) {
  case SET_ROOM:
    nextState.room = action.roomName;
    break;
  default:
    return prevState;
  }
    return nextState;
}

//action creators
export const setRoom = (roomName) => {
  return {
    type: SET_ROOM,
    roomName
  }
}

export default roomReducer;
