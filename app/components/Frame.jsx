import React from 'react'
import { connect } from 'react-redux'
import Navbar from './Navbar'
import Footer from './Footer'

const Frame = (props) => {

  return (
    <div className="container-fluid">
      <Navbar />
      <div className="app-wrapper">
        { props.children }
      </div>
      <Footer />
    </div>
  )
}

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Frame)
