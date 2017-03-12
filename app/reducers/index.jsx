import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  auth: require('./auth').default,
  room: require('./room').default,
  kit: require('./kit').default,
})

export default rootReducer
