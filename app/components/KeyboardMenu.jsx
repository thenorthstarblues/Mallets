import React from 'react'
import { Link } from 'react-router'

const KeyboardMenu = (props) => {
  return (
    <div>
      <section className="hero is-success">
        <div className="hero-body">
          <div className="container">
            <h1 className="title logo">
              Get your mallets!
            </h1>
            <h2 className="subtitle">
              What do you want to do?
            </h2>
          </div>
        </div>
      </section>
      <div className="tile-box">
        <div className="tile is-ancestor is-vertical menu-tile">
          <div className="tile is-parent is-vertical">
            <div className="tile is-child box button">
              <p className="title">Start a room</p>
            </div>
            <div className="tile is-child box button">
              <p className="title">Join a room</p>
            </div>
            <Link to="/kit">
              <div className="tile is-child box button">
                <p className="title">Play by myself</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default KeyboardMenu;
