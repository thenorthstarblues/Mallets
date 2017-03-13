import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './reducers'
import createLogger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import { routerMiddleware, push } from 'react-router-redux'
import { browserHistory } from 'react-router'
import {whoami} from './reducers/auth'

const historyMiddleware = routerMiddleware(browserHistory)

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(
      createLogger({collapsed: true}),
      thunkMiddleware,
      historyMiddleware
    )
  )
)

export default store

// Set the auth info at start
store.dispatch(whoami())
