import firebase from 'firebase'

const reducer = (state=null, action) => {
  switch(action.type) {
  case AUTHENTICATED:
    return action.user
  }
  return state
}

const AUTHENTICATED = 'AUTHENTICATED'
export const authenticated = user => ({
  type: AUTHENTICATED, user
})

export const login = (email, password) =>
  dispatch => firebase.auth().signInWithEmailAndPassword(email, password)

export default reducer
