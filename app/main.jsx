'use strict'
import React from 'react'
import {Router, Route, IndexRedirect, browserHistory} from 'react-router'
import {render} from 'react-dom'
import {Provider} from 'react-redux'

import store from './store'
import Frame from './components/Frame'
import Welcome from './components/Welcome'
// import Signup from './components/Signup'
import Kit from './components/Kit'
// import Login from './components/Login'
import WhoAmI from './components/WhoAmI'

/*const ExampleApp = connect(
  ({ auth }) => ({ user: auth })
) (
  ({ user, children }) =>
    <div>
      <nav>
        {user ? <WhoAmI/> : <Login/>}
      </nav>
      {children}
    </div>
)*/

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={Frame}>
        <IndexRedirect to="/welcome" />
        <Route path="/welcome" component={Welcome} />
        {/*<Route path="/signup" component={Signup} />*/}
        {/*<Route path="/login" component={Login} />*/}
        <Route path="/kit" component={Kit} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('main')
)
