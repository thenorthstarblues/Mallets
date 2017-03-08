import firebase from 'APP/firebase'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './reducers'
import createLogger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(
      createLogger({collapsed: true}),
      thunkMiddleware
    )
  )
)

export default store

// Attach the auth reducer to Firebase
import {authenticated} from './reducers/auth'
firebase.auth()
  .onAuthStateChanged(user => store.dispatch(authenticated(user)))
