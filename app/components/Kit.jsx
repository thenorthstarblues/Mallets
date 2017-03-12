import React, { Component, PropTypes } from 'react';
import { Note, KeyBinding } from 'react-orchestra';
const io = require('socket.io-client')
const socket = io()

class Kit extends Component {
  constructor(props){
    super(props);
    this.state = {
      play: {},
      kit: this.props.kit,
    }
    socket.on('receive play', (payload) => {
      this.updateStateFromSockets(payload)
    })
    socket.on('receive stop', (payload) => {
      this.updateStateFromSockets(payload)
    })
    this.onKeyDown = this.onKeyDown.bind(this);
    this.onKeyUp = this.onKeyUp.bind(this);
  }

  updateStateFromSockets(payload) {
    this.setState({[payload.keyName]: ![payload.keyName]})
  }

  componentDidMount() {
    socket.emit('room', {room: this.props.room})
  }

  componentWillUnmount() {
    socket.emit('leave room', { room: this.props.room })
  }

  onKeyDown(keyName) {
    this.setState({ play: {[keyName]: true } })
    socket.emit('play', {
      room: this.props.room,
      keyName
    })
  }

  onKeyUp(keyName) {
    this.setState({ play: { [keyName]: false} })
    socket.emit('stop', {
      room: this.props.room,
      keyName
    })
  }

  render(){
    const semi = this.state.play[';'];
    return (
      <div className="kit-container">
        <div className="key-row">
          <KeyBinding keyName="w" onKeyDown={this.onKeyDown} onKeyUp={this.onKeyUp} />
            <Note instrumentName="vibraphone" name={'Gb3'} play={this.state.play.w}>
              <div className={`key top button ${this.state.play.w ? 'is-focused' : ''}`}><h1>W</h1></div>
            </Note>
          <KeyBinding keyName="e" onKeyDown={this.onKeyDown} onKeyUp={this.onKeyUp} />
            <Note instrumentName="vibraphone" name={'Ab3'} play={this.state.play.e}>
              <div className={`key top button ${this.state.play.e ? 'is-focused' : ''}`}><h1>E</h1></div>
            </Note>
          <KeyBinding keyName="r" onKeyDown={this.onKeyDown} onKeyUp={this.onKeyUp} />
            <Note instrumentName="vibraphone" name={'Bb3'} play={this.state.play.r}>
              <div className={`key top right-marg button ${this.state.play.r ? 'is-focused' : ''}`}><h1>R</h1></div>
            </Note>
          <KeyBinding keyName="t" onKeyDown={this.onKeyDown} onKeyUp={this.onKeyUp} />
            <Note instrumentName="vibraphone" name={'Db4'} play={this.state.play.t}>
              <div className={`key top button ${this.state.play.t ? 'is-focused' : ''}`}><h1>T</h1></div>
            </Note>
          <KeyBinding keyName="y" onKeyDown={this.onKeyDown} onKeyUp={this.onKeyUp} />
            <Note instrumentName="vibraphone" name={'Eb4'} play={this.state.play.y}>
              <div className={`key top right-marg button ${this.state.play.y ? 'is-focused' : ''}`}><h1>Y</h1></div>
            </Note>
          <KeyBinding keyName="u" onKeyDown={this.onKeyDown} onKeyUp={this.onKeyUp} />
            <Note instrumentName="vibraphone" name={'Gb4'} play={this.state.play.u}>
              <div className={`key top button ${this.state.play.u ? 'is-focused' : ''}`}><h1>U</h1></div>
            </Note>
          <KeyBinding keyName="i" onKeyDown={this.onKeyDown} onKeyUp={this.onKeyUp} />
            <Note instrumentName="vibraphone" name={'Ab4'} play={this.state.play.i}>
              <div className={`key top button ${this.state.play.i ? 'is-focused' : ''}`}><h1>I</h1></div>
            </Note>
          <KeyBinding keyName="o" onKeyDown={this.onKeyDown} onKeyUp={this.onKeyUp} />
            <Note instrumentName="vibraphone" name={'Bb4'} play={this.state.play.o}>
              <div className={`key top button ${this.state.play.o ? 'is-focused' : ''}`}><h1>O</h1></div>
            </Note>
        </div>
        <div className="key-row">
          <KeyBinding keyName="a" onKeyDown={this.onKeyDown} onKeyUp={this.onKeyUp} />
            <Note instrumentName="vibraphone" name={'F3'} play={this.state.play.a}>
              <div className={`key bottom button ${this.state.play.a ? 'is-focused' : ''}`}><h1>A</h1></div>
            </Note>
          <KeyBinding keyName="s" onKeyDown={this.onKeyDown} onKeyUp={this.onKeyUp} />
            <Note instrumentName="vibraphone" name={'G3'} play={this.state.play.s}>
              <div className={`key bottom button ${this.state.play.s ? 'is-focused' : ''}`}><h1>S</h1></div>
            </Note>
          <KeyBinding keyName="d" onKeyDown={this.onKeyDown} onKeyUp={this.onKeyUp} />
            <Note instrumentName="vibraphone" name={'A3'} play={this.state.play.d}>
              <div className={`key bottom button ${this.state.play.d ? 'is-focused' : ''}`}><h1>D</h1></div>
            </Note>
          <KeyBinding keyName="f" onKeyDown={this.onKeyDown} onKeyUp={this.onKeyUp} />
            <Note instrumentName="vibraphone" name={'B3'} play={this.state.play.f}>
              <div className={`key bottom button ${this.state.play.f ? 'is-focused' : ''}`}><h1>F</h1></div>
            </Note>
          <KeyBinding keyName="g" onKeyDown={this.onKeyDown} onKeyUp={this.onKeyUp} />
            <Note instrumentName="vibraphone" name={'C4'} play={this.state.play.g}>
              <div className={`key bottom button ${this.state.play.g ? 'is-focused' : ''}`}><h1>G</h1></div>
            </Note>
          <KeyBinding keyName="h" onKeyDown={this.onKeyDown} onKeyUp={this.onKeyUp} />
            <Note instrumentName="vibraphone" name={'D4'} play={this.state.play.h}>
              <div className={`key bottom button ${this.state.play.h ? 'is-focused' : ''}`}><h1>H</h1></div>
            </Note>
          <KeyBinding keyName="j" onKeyDown={this.onKeyDown} onKeyUp={this.onKeyUp} />
            <Note instrumentName="vibraphone" name={'E4'} play={this.state.play.j}>
              <div className={`key bottom button ${this.state.play.j ? 'is-focused' : ''}`}><h1>J</h1></div>
            </Note>
          <KeyBinding keyName="k" onKeyDown={this.onKeyDown} onKeyUp={this.onKeyUp} />
            <Note instrumentName="vibraphone" name={'F4'} play={this.state.play.k}>
              <div className={`key bottom button ${this.state.play.k ? 'is-focused' : ''}`}><h1>K</h1></div>
            </Note>
          <KeyBinding keyName="l" onKeyDown={this.onKeyDown} onKeyUp={this.onKeyUp} />
            <Note instrumentName="vibraphone" name={'G4'} play={this.state.play.l}>
              <div className={`key bottom button ${this.state.play.l ? 'is-focused' : ''}`}><h1>L</h1></div>
            </Note>
          <KeyBinding keyName=";" onKeyDown={this.onKeyDown} onKeyUp={this.onKeyUp} />
            <Note instrumentName="vibraphone" name={'A4'} play={this.state.play[';']}>
              <div className={`key bottom button ${semi ? 'is-focused' : ''}`}><h1>;</h1></div>
            </Note>
        </div>
      </div>
    )
  }
}

export default Kit;
