let initialState = {
  room: null
}

//constants
const SET_ROOM = 'SET_ROOM';
const CLEAR_ROOM = 'CLEAR_ROOM';

//reducer
const roomReducer = (prevState = initialState, action) => {
  const nextState = Object.assign({}, prevState);

  switch (action.type) {
  case SET_ROOM:
    nextState.room = action.roomName;
    break;
  case CLEAR_ROOM:
    nextState.room =  null;
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

export const clearRoom = () => {
  return {
    type: CLEAR_ROOM,
  }
}

export default roomReducer;
