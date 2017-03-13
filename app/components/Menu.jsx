import React from 'react'
import { Link } from 'react-router'

const Menu = (props) => {
  return (
    <div className="menu box">
      <div className="menu-contain">
        <div className="container">
          <h1 className="title logo lato">
            Get your mallets!
          </h1>
          <h2 className="subtitle is-4 lato">
            What do you want to do?
          </h2>
        </div>
        <div className="tile-box">
          <div className="tile is-ancestor is-vertical menu-tile">
            <div className="tile is-parent is-vertical">
              <Link to="/new-room">
              <div className="tile is-child box button">
                <p className="title">Start a room</p>
              </div>
              </Link>
              <Link to="/join-room">
              <div className="tile is-child box button">
                <p className="title">Join a room</p>
              </div>
              </Link>
              <Link to="/kit">
                <div className="tile is-child box button">
                  <p className="title">Play by myself</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Menu;
