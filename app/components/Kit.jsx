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
        <div className="key-row">
          <KeyBinding keyName="w" onKeyDown={this.onKeyDown} onKeyUp={this.onKeyUp} />
            <Note instrumentName="vibraphone" name={'Gb3'} play={this.state.play.w}>
              <div className="key top"><h1>W</h1></div>
            </Note>
          <KeyBinding keyName="e" onKeyDown={this.onKeyDown} onKeyUp={this.onKeyUp} />
            <Note instrumentName="vibraphone" name={'Ab3'} play={this.state.play.e}>
              <div className="key top"><h1>E</h1></div>
            </Note>
          <KeyBinding keyName="r" onKeyDown={this.onKeyDown} onKeyUp={this.onKeyUp} />
            <Note instrumentName="vibraphone" name={'Bb3'} play={this.state.play.r}>
              <div className="key top right-marg"><h1>R</h1></div>
            </Note>
          <KeyBinding keyName="t" onKeyDown={this.onKeyDown} onKeyUp={this.onKeyUp} />
            <Note instrumentName="vibraphone" name={'Db4'} play={this.state.play.t}>
              <div className="key top"><h1>T</h1></div>
            </Note>
          <KeyBinding keyName="y" onKeyDown={this.onKeyDown} onKeyUp={this.onKeyUp} />
            <Note instrumentName="vibraphone" name={'Eb4'} play={this.state.play.y}>
              <div className="key top right-marg"><h1>Y</h1></div>
            </Note>
          <KeyBinding keyName="u" onKeyDown={this.onKeyDown} onKeyUp={this.onKeyUp} />
            <Note instrumentName="vibraphone" name={'Gb4'} play={this.state.play.u}>
              <div className="key top"><h1>U</h1></div>
            </Note>
          <KeyBinding keyName="i" onKeyDown={this.onKeyDown} onKeyUp={this.onKeyUp} />
            <Note instrumentName="vibraphone" name={'Ab4'} play={this.state.play.i}>
              <div className="key top"><h1>I</h1></div>
            </Note>
          <KeyBinding keyName="o" onKeyDown={this.onKeyDown} onKeyUp={this.onKeyUp} />
            <Note instrumentName="vibraphone" name={'Bb4'} play={this.state.play.o}>
              <div className="key top"><h1>O</h1></div>
            </Note>
        </div>
        <div className="key-row">
          <KeyBinding keyName="a" onKeyDown={this.onKeyDown} onKeyUp={this.onKeyUp} />
            <Note instrumentName="vibraphone" name={'F3'} play={this.state.play.a}>
              <div className="key bottom"><h1>A</h1></div>
            </Note>
          <KeyBinding keyName="s" onKeyDown={this.onKeyDown} onKeyUp={this.onKeyUp} />
            <Note instrumentName="vibraphone" name={'G3'} play={this.state.play.s}>
              <div className="key bottom"><h1>S</h1></div>
            </Note>
          <KeyBinding keyName="d" onKeyDown={this.onKeyDown} onKeyUp={this.onKeyUp} />
            <Note instrumentName="vibraphone" name={'A3'} play={this.state.play.d}>
              <div className="key bottom"><h1>D</h1></div>
            </Note>
          <KeyBinding keyName="f" onKeyDown={this.onKeyDown} onKeyUp={this.onKeyUp} />
            <Note instrumentName="vibraphone" name={'B3'} play={this.state.play.f}>
              <div className="key bottom"><h1>F</h1></div>
            </Note>
          <KeyBinding keyName="g" onKeyDown={this.onKeyDown} onKeyUp={this.onKeyUp} />
            <Note instrumentName="vibraphone" name={'C4'} play={this.state.play.g}>
              <div className="key bottom"><h1>G</h1></div>
            </Note>
          <KeyBinding keyName="h" onKeyDown={this.onKeyDown} onKeyUp={this.onKeyUp} />
            <Note instrumentName="vibraphone" name={'D4'} play={this.state.play.h}>
              <div className="key bottom"><h1>H</h1></div>
            </Note>
          <KeyBinding keyName="j" onKeyDown={this.onKeyDown} onKeyUp={this.onKeyUp} />
            <Note instrumentName="vibraphone" name={'E4'} play={this.state.play.j}>
              <div className="key bottom"><h1>J</h1></div>
            </Note>
          <KeyBinding keyName="k" onKeyDown={this.onKeyDown} onKeyUp={this.onKeyUp} />
            <Note instrumentName="vibraphone" name={'F4'} play={this.state.play.k}>
              <div className="key bottom"><h1>K</h1></div>
            </Note>
          <KeyBinding keyName="l" onKeyDown={this.onKeyDown} onKeyUp={this.onKeyUp} />
            <Note instrumentName="vibraphone" name={'G4'} play={this.state.play.l}>
              <div className="key bottom"><h1>L</h1></div>
            </Note>
          <KeyBinding keyName=";" onKeyDown={this.onKeyDown} onKeyUp={this.onKeyUp} />
            <Note instrumentName="vibraphone" name={'A4'} play={this.state.play[';']}>
              <div className="key bottom"><h1>;</h1></div>
            </Note>
        </div>
      </div>
    )
  }
}

export default Kit;
