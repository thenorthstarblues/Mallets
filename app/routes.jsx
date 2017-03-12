import React from 'react';
import { Route, IndexRoute, browserHistory } from 'react-router';

import Frame from './components/Frame'
import Welcome from './components/Welcome'
import Signup from './components/Signup'
import Kit from './components/Kit'
import Login from './components/Login'
import KeyboardMenu from './components/KeyboardMenu'
import WhoAmI from './components/WhoAmI'

export default (
  <Route path="/" component={Frame}>
    <IndexRoute component={Welcome} />
    <Route path="/welcome" component={Welcome} />
    <Route path="/signup" component={Signup} />
    <Route path="/login" component={Login} />
    <Route path="/kit" component={Kit} />
    <Route path="/keyboards" component={KeyboardMenu} />
  </Route>
)

