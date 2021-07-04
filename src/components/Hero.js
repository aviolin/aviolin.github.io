import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import 'splitting/dist/splitting.css';
import Splitting from 'splitting';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf, faArrowDown } from '@fortawesome/free-solid-svg-icons';

import Button from './Button';

const Hero = () => {
  const heroRef = useRef(null);

  const animateIn = () => {
    let tl = gsap.timeline();
    tl.set(heroRef.current, { visibility: "visible"});
  }

  useEffect(() => {
    Splitting({ target: '.heading', by: 'chars' });
    Splitting({ target: '.subheading', by: 'lines' });
    animateIn();
  }, []);

  return (
    <div className="hero" ref={heroRef}>
      <h1>
        <span data-splitting="" className="heading">Hello, I'm Arlo Adams.</span>
        <p data-splitting="" className="subheading">
          I am a <b>Front-End Web Developer</b> crafting interactive online experiences in Denver, Colorado.
        </p>
      </h1>
      <div className="buttons">
        <Button
          text="My Work"
          link="#my-work"
        />
        <Button 
          classes="secondary"
          text={<><FontAwesomeIcon icon={faFilePdf} />&nbsp;&nbsp;Resume</>}
          link="ArloAdamsResume.pdf"
        />
      </div>
      <div className="scroll-arrow-container">
        <FontAwesomeIcon icon={faArrowDown} className="scroll-arrow"/>
      </div>
    </div>
  );
}

export default Hero;