import React from 'react'

const Navbar = (props) => {
  return (
    <div className="row my-header">
      <div className="col-xs-6">
          <p className="logo">STICK</p>
      </div>
      <div className="col-xs-6">
          <button className="btn">Log in</button>
      </div>
    </div>
  )
}

export default Navbar
