import React, { Component } from 'react'
import { Link, browserHistory } from 'react-router'

class JoinRoom extends Component {
  constructor(props){
    super(props);
    this.state = {
      roomName: '',
    }
    this.handleNameChange = this.handleNameChange.bind(this);
    this.setNewName = this.setNewName.bind(this);
  }

  handleNameChange(e){
    this.setState({ roomName: e.target.value });
  }

  setNewName(e){
    e.preventDefault();
    const roomToJoin = this.state.roomName.toLowerCase().replace(/[\W_]+/g, '');
    this.props.setRoom(roomToJoin);
    browserHistory.push('/kit');
  }

  render(){
    return (
      <div className="modal is-active">
        <div className="modal-background"></div>
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title">Enter Room Name</p>
            <Link to="/menu">
              <button className="delete"></button>
            </Link>
          </header>
          <section className="modal-card-body">
            <form>
              <p className="control has-icon">
              <input
                className="input"
                type="name"
                placeholder="Room Name"
                onChange={this.handleNameChange} />
              <span className="icon is-small">
                <i className="fa fa-music"></i>
              </span>
              </p>
            </form>
          </section>
          <footer className="modal-card-foot">
              <button
                className="button is-success"
                onClick={this.setNewName}
                >Join Room</button>
          </footer>
        </div>
      </div>
    )
  }
}

export default JoinRoom;
