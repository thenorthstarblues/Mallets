import React from 'react'
import { Link } from 'react-router'

export const Login = ({ login }) => (
    <div className="modal is-active">
      <div className="modal-background"></div>
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">Welcome</p>
            <Link to="welcome">
              <button className="delete" />
            </Link>
        </header>
        <section className="modal-card-body">
          <form>
            <p className="control has-icon">
            <input className="input" type="email" placeholder="Email" />
            <span className="icon is-small">
              <i className="fa fa-envelope"></i>
            </span>
            </p>
            <p className="control has-icon">
              <input className="input" type="password" placeholder="Password" />
              <span className="icon is-small">
                <i className="fa fa-lock"></i>
              </span>
            </p>
          </form>
        </section>
        <footer className="modal-card-foot">
          <Link to="/menu">
            <button className="button is-success">Log in</button>
          </Link>
        </footer>
      </div>
    </div>
)

import {login} from 'APP/app/reducers/auth'
import {connect} from 'react-redux'

export default connect(
  state => ({}),
  {login}
)(Login)
