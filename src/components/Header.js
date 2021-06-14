import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faMoon } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    <header>
      <div className="logo">arlo.adams()</div>
      <div className="hamburger"><FontAwesomeIcon icon={faMoon} /></div>
      <nav className="horizontal-nav">
        <ul>
          <li><a href="#" className="link">About</a></li>
          <li><a href="#" className="link">Projects</a></li>
          <li><a href="#" className="link">Contact</a></li>
          <li><FontAwesomeIcon icon={faMoon} /></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;