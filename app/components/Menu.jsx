import React from 'react'
import { Link } from 'react-router'

const Menu = (props) => {
  return (
    <div className="menu-box">

      <div className="container is-fluid">

        <div className="menu-top">
          <h1 className="title lato4 margin2">
            Get your mallets!
          </h1>
        </div>

        <div className="menu-middle">
          <h2 className="subtitle lato2 margin2">
            What do you want to do?
          </h2>
        </div>

        <div className="menu-bottom">
            <div className="control is-grouped">
              <p className="control">
                <a className="button is-primary">
                  <span className="icon is-small">
                    <i className="fa fa-music" />
                  </span>
                  <span>Start a Room</span>
                </a>
              </p>
              <p className="control">
                <a className="button is-primary">
                  <span className="icon is-small">
                    <i className="fa fa-group" />
                  </span>
                  <span>Join a Room</span>
                </a>
              </p>
              <p className="control">
                <a className="button is-primary">
                  <span className="icon is-small">
                    <i className="fa fa-user" />
                  </span>
                  <span>Play by Myself</span>
                </a>
              </p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Menu;


<div className="control is-grouped">
  <p className="control">
    <a className="button is-primary">
      <span className="icon is-small">
        <i className="fa fa-music" />
      </span>
      <span>Start a Room</span>
    </a>
  </p>
  <p className="control">
    <a className="button is-primary">
      <span className="icon is-small">
        <i className="fa fa-group" />
      </span>
      <span>Join a Room</span>
    </a>
  </p>
  <p className="control">
    <a className="button is-primary">
      <span className="icon is-small">
        <i className="fa fa-user" />
      </span>
      <span>Play by Myself</span>
    </a>
  </p>
</div>
