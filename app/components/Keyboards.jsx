import React, { Component } from 'react'
import { browserHistory } from 'react-router'
// import { setKit } from '../reducers/kit'

class Keyboards extends Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e){
    e.preventDefault();
    this.props.setKit(e.target.name);
    browserHistory.push('/kit');
  }

  render(){
    return (
      <div className="menu-box animated slideInRight">
        <div className="text">
          <p className="title is-1 margin2">What do you want to play?</p>
        </div>
        <div className="control is-grouped">
          <p className="control">
            <a
              className="button is-large is-info"
              name="vibraphone"
              onClick={this.handleClick}>
              Vibraphone
            </a>
          </p>
          <p className="control">
            <a
              className="button is-large is-info"
              name="marimba"
              onClick={this.handleClick}>
              Marimba
            </a>
          </p>
          <p className="control">
            <a
              className="button is-large is-info"
              name="xylophone"
              onClick={this.handleClick}>
              Xylophone
            </a>
          </p>
          <p className="control">
            <a
              className="button is-large is-info"
              name="glockenspiel"
              onClick={this.handleClick}>
              Glockenspiel
            </a>
          </p>
        </div>
      </div>
    )
  }
}

export default Keyboards;
