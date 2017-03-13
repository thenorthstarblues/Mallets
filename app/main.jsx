'use strict'
import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
// import { ConnectedRouter } from 'react-router-redux';
import routes from './routes';
import { Provider } from 'react-redux';
import store from './store';



render(
  <Provider store={store}>
    <Router routes={routes} history={browserHistory} />
  </Provider>,
  document.getElementById('main')
)
