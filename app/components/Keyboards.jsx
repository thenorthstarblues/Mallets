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
      <div className="container is-fluid">
        <button name="vibraphone" onClick={this.handleClick}>Vibes</button>
        <button name="marimba" onClick={this.handleClick}>Marimba</button>
        <button name="xylophone" onClick={this.handleClick}>Xylophone</button>
        <button name="glockenspiel" onClick={this.handleClick}>Glock</button>
      </div>
    )
  }
}

export default Keyboards;
