import React from 'react'

const Navbar = ({ user }) => {
  return (
    <nav className="nav has-shadow">
      <div className="nav-left">
        <div className="nav-item">
          <h1 className="logo">MALLETS</h1>
        </div>
        <div className="nav-right">
          <div className="nav-item">
            <button className="button is-info">{user ? 'Log out' : 'Log in'}</button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;
