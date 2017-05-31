import React from 'react';
import { Link } from 'react-router';

const Navbar = () => (
    <nav className="nav has-shadow">
      <div className="nav-left">
        <div className="nav-item">
          <Link to="/welcome">
            <h1 className="logo">MALLETS</h1>
          </Link>
        </div>
      </div>
    </nav>
  );

export default Navbar;
