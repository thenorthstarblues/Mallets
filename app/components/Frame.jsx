import React, { Component } from 'react'
import { connect } from 'react-redux'
import Navbar from './Navbar'
import Footer from './Footer'
import { setRoom } from '../reducers/room'
import { setKit } from '../reducers/kit'

class Frame extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div className="no-overflow">
        <Navbar user={this.props.user} />
        <div className="container is-fluid body-height">
          { this.props &&
              this.props.children && React.cloneElement(this.props.children, Object.assign({}, this.props))
          }
        </div>
        <Footer />
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    room: state.room,
    kit: state.kit,
    user: state.user,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setRoom(roomName){
      dispatch(setRoom(roomName))
    },
    setKit(kitName){
      dispatch(setKit(kitName))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Frame)
