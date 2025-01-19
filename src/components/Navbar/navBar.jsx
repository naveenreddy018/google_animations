import React from 'react';
import ImageComponent from '../Image/image';
import { assets } from '../../assets/assets';
import { Link } from 'react-router-dom';
import './navbar.scss';

function NavBar() {
  return (
    <div className="header_container">
      <div className="nav_container">
        <div className="header_image">
          <ImageComponent src={assets.favicon} width="40px" />
          <p>Chrome</p>
        </div>
        <nav className="nav_links">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/google">The Browser By Google</Link>
            </li>
            <li>
              <Link to="/safety">Safety</Link>
            </li>
            <li>
              <Link to="/support">Support</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default NavBar;
