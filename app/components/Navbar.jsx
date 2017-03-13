import React from 'react'
import { Link } from 'react-router'

const Navbar = ({ user }) => {
  return (
    <nav className="nav has-shadow">
      <div className="nav-left">
        <div className="nav-item">
          <Link to="/welcome">
            <h1 className="logo">MALLETS</h1>
          </Link>
        </div>
        <div className="nav-right">
          <div className="nav-item">
            <Link to={user ? '/welcome' : '/login'}>
              <button className="button is-info">
                {user ? 'Log out' : 'Log in'}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;
