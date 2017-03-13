import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

const rootReducer = combineReducers({
  auth: require('./auth').default,
  room: require('./room').default,
  kit: require('./kit').default,
  router: routerReducer,
})

export default rootReducer
