import React, { Component } from 'react'
import { Note, KeyBinding } from 'react-orchestra';

class Kit extends Component {
  constructor(props){
    super(props);
    this.state = {
      play: {},
    };

    this.onKeyDown = this.onKeyDown.bind(this);
    this.onKeyUp = this.onKeyUp.bind(this);
  }

  onKeyDown(keyName) {
    this.setState({ play: {
      [keyName]: true,
    } });
  }
  onKeyUp(keyName) {
    this.setState({ play: {
      [keyName]: false,
    } });
  }

  render(){
    return (
      <div className="kit-container">
          <KeyBinding keyName="w" onKeyDown={this.onKeyDown} onKeyUp={this.onKeyUp} />
          <Note instrumentName="vibraphone" name={'C4'} play={this.state.play.w}>
            <div className="drum-pad"><p>Press W</p></div>
          </Note>
          <KeyBinding keyName="s" onKeyDown={this.onKeyDown} onKeyUp={this.onKeyUp} />
          <Note instrumentName="vibraphone" name={'D4'} play={this.state.play.s}>
            <div className="drum-pad"><p>Press S</p></div>
          </Note>
          <KeyBinding keyName="e" onKeyDown={this.onKeyDown} onKeyUp={this.onKeyUp} />
          <Note instrumentName="vibraphone" name={'E4'} play={this.state.play.e}>
            <div className="drum-pad"><p>Press E</p></div>
          </Note>
          <KeyBinding keyName="d" onKeyDown={this.onKeyDown} onKeyUp={this.onKeyUp} />
          <Note instrumentName="vibraphone" name={'F4'} play={this.state.play.d}>
            <div className="drum-pad"><p>Press D</p></div>
          </Note>
      </div>
    )
  }
}

export default Kit;
