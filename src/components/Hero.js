import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import 'splitting/dist/splitting.css';
import Splitting from 'splitting';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

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
          I am a <b>Full-Stack Developer</b> based in Denver, Colorado. I enjoy spending my days crafting unique interactive online experiences and solving interesting problems in the software world. If you are looking for a collaborator, feel free to reach out.

        </p>
      </h1>
      <div className="buttons">
        <Button
          text="My Work"
          link="#my-work"
        />
      </div>
      <div className="scroll-arrow-container">
        <FontAwesomeIcon icon={faArrowDown} className="scroll-arrow"/>
      </div>
    </div>
  );
}

export default Hero;