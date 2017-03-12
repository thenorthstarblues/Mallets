import React, { Component } from 'react'
import { connect } from 'react-redux'
import Navbar from './Navbar'
import Footer from './Footer'

class Frame extends Component {
  render(){
    return (
      <div className="no-overflow">
        <Navbar />
        <div className="container is-fluid body-height">
          { this.props.children }
        </div>
        <Footer />
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Frame)
