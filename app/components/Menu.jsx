import React, { Component } from 'react'
import { Link, browserHistory } from 'react-router'

class Menu extends Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e){
    this.props.setRoom(null)
    browserHistory.push('/keyboards')
  }


  render(){
    return (
      <div className="menu-box animated slideInRight">

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
                  <Link to="/new-room">
                    <button className="button is-large is-primary">
                      <span className="icon is-small">
                        <i className="fa fa-music" />
                      </span>
                      <span>Start a Room</span>
                    </button>
                  </Link>
                </p>
                <p className="control">
                  <Link to="/join-room">
                    <button className="button is-large is-primary">
                      <span className="icon is-small">
                        <i className="fa fa-group" />
                      </span>
                      <span>Join a Room</span>
                    </button>
                  </Link>
                </p>
                <p className="control">
                  <button
                    className="button is-large is-primary"
                    onClick={this.handleClick}>
                    <span className="icon is-small">
                      <i className="fa fa-user" />
                    </span>
                    <span>Play by Myself</span>
                  </button>
                </p>
              </div>
          </div>
        </div>
      </div>
    )
  }
}


export default Menu;
