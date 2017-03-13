import React from 'react'
import { Link } from 'react-router'

const Signup = () => (
    <div className="modal is-active">
      <div className="modal-background"></div>
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">Create an Account</p>
            <Link to="/welcome">
              <button className="delete" />
            </Link>
        </header>
        <section className="modal-card-body">
          <form>
            <p className="control has-icon">
            <input className="input" type="name" placeholder="Name" />
            <span className="icon is-medium">
              <i className="fa fa-user"></i>
            </span>
            </p>
            <p className="control has-icon">
            <input className="input" type="email" placeholder="Email" />
            <span className="icon is-medium">
              <i className="fa fa-envelope"></i>
            </span>
            </p>
            <p className="control has-icon">
              <input className="input" type="password" placeholder="Password" />
              <span className="icon is-medium">
                <i className="fa fa-lock"></i>
              </span>
            </p>
          </form>
        </section>
        <footer className="modal-card-foot">
          <a className="button is-success">Sign up</a>
        </footer>
      </div>
    </div>
)

export default Signup;
