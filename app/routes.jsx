import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Frame from './components/Frame'
import Welcome from './components/Welcome'
import Signup from './components/Signup'
import Kit from './components/Kit'
import Login from './components/Login'
import Menu from './components/Menu'
import NewRoom from './components/NewRoom'
import JoinRoom from './components/JoinRoom'
import WhoAmI from './components/WhoAmI'

export default (
  <Route path="/" component={Frame}>
    <IndexRoute component={Welcome} />
    <Route path="/welcome" component={Welcome} />
    <Route path="/signup" component={Signup} />
    <Route path="/login" component={Login} />
    <Route path="/kit" component={Kit} />
    <Route path="/menu" component={Menu} />
    <Route path="/new-room" component={NewRoom} />
    <Route path="/join-room" component={JoinRoom} />
  </Route>
)

