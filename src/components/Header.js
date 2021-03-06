import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import 'splitting/dist/splitting.css';
import Splitting from 'splitting';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

const Header = ({
  toggleTheme,
  theme
}) => {
  const headerRef = useRef(null);

  const animateIn = () => {
    let tl = gsap.timeline();
    tl.set(headerRef.current, {visibility: "visible"});
    tl.from(headerRef.current, {duration: 2, autoAlpha: 0, ease: "power2.out", delay: 1});
  }

  useEffect(() => {
    animateIn();
    Splitting({ target: ".logo" });
  }, []);

  return (
    <header>
      <div ref={headerRef}>
        <div><a href="/" className="logo" data-splitting="">arlo.adams()</a></div>
        <div className="hamburger">
          <button 
            className="theme-btn"
            onClick={toggleTheme}>
              {
                theme === "theme-light" ? 
                  <FontAwesomeIcon icon={faMoon} className="moon" />
                :
                  <FontAwesomeIcon icon={faSun} className="sun" />
              }
          </button>
        </div>
        <nav className="horizontal-nav">
          <ul>
            <li><a href="#about" className="link">About</a></li>
            <li><a href="#my-work" className="link">My Work</a></li>
            <li><a href="#contact" className="link">Contact</a></li>
            <li>
              <button 
                className="theme-btn"
                onClick={toggleTheme}>
                  {
                    theme === "theme-light" ? 
                      <FontAwesomeIcon icon={faMoon} className="moon" />
                    :
                      <FontAwesomeIcon icon={faSun} className="sun" />
                  }
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;