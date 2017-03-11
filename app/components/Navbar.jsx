import React from 'react'

const Navbar = (props) => {
  return (
    <div className="ui large teal inverted top fixed menu">
      <div className="left menu">
        <div className="header link item">
          <a>Mallets</a>
        </div>
      </div>
      <div className="right menu">
        <div className="item">
          <button className="ui button">Log in</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
