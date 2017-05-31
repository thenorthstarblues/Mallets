import React from 'react';
import { Link } from 'react-router';

const Welcome = () => (
    <div className="open container is-fluid animated slideInUp">
      <h1 className="intro title">MALLETS</h1>
      <h3 className="subtitle is-5">
        Let's play! You just need to enter a <Link to="/menu">ROOM</Link>.
      </h3>
    </div>
  );

export default Welcome;
