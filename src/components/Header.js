import React, { useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { gsap } from 'gsap';

const Header = ({
  toggleTheme,
  theme
}) => {
  const headerRef = useRef(null);

  const animateIn = () => {
    let tl = gsap.timeline();
    tl.set(headerRef.current, { visibility: "visible"});
    tl.from(headerRef.current, {duration: 2, autoAlpha: 0, ease: "power2.out", delay: .2});
  }

  useEffect(() => {
    animateIn();
  }, []);

  return (
    <header>
      <div ref={headerRef}>
        <div className="logo"><a href="#" className="link">arlo.adams()</a></div>
        <div className="hamburger">
        <button 
          className="theme-btn"
          onClick={toggleTheme}>
            {
              theme === "theme-light" ? 
                <FontAwesomeIcon icon={faMoon} />
              :
                <FontAwesomeIcon icon={faSun} />
            }
        </button>
        </div>
        <nav className="horizontal-nav">
          <ul>
            <li><a href="#skills" className="link">Skills</a></li>
            <li><a href="#projects" className="link">Projects</a></li>
            <li><a href="#contact" className="link">Contact</a></li>
            <li>
              <button 
                className="theme-btn"
                onClick={toggleTheme}>
                  {
                    theme === "theme-light" ? 
                      <FontAwesomeIcon icon={faMoon} />
                    :
                      <FontAwesomeIcon icon={faSun} />
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