import React from 'react'
import { Link } from 'react-router'

const Welcome = (props) => {
  return (
    <div className="open container is-fluid animated slideInRight">
      <h1 className="intro title">MALLETS</h1>
      <h3 className="subtitle is-5">
        Let's play! You just need to <Link to="/signup">SIGN UP</Link>
      </h3>
    </div>
  )
}

export default Welcome;
