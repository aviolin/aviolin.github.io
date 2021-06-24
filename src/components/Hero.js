import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf, faArrowDown } from '@fortawesome/free-solid-svg-icons';

import Button from './Button';

const Hero = () => {
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const buttonsRef = useRef(null);
  const arrowRef = useRef(null);
  const heroRef = useRef(null);

  const animateIn = () => {
    let tl = gsap.timeline();
    tl.set(heroRef.current, { visibility: "visible"});
    tl.from(titleRef.current, {duration: 2, autoAlpha: 0, ease: "power2.out", delay: .2});
    tl.from(descriptionRef.current, {duration: 1.8, y: 50, autoAlpha: 0, ease: "power2.out", delay: .2}, ".2");
    tl.from(buttonsRef.current, {duration: 1.6, y: 50, autoAlpha: 0, ease: "power2.out", delay: .2}, ".4");
    tl.from(arrowRef.current, {duration: 1.2, y: 50, autoAlpha: 0, ease: "power2.out", delay: .2}, ".8");
  }

  useEffect(() => {
    animateIn();
  }, []);

  return (
    <div className="hero" ref={heroRef}>
      <h1>
        <span ref={titleRef}>Hello, I'm Arlo Adams.</span>
        <p ref={descriptionRef}>I am a <b>Front-End Web Developer</b> creating interactive online experiences in Denver, Colorado.</p>
      </h1>
      <div className="buttons" ref={buttonsRef}>
        <Button
          text="My Work"
          link="#my-work"
        />
        <Button 
          classes="secondary"
          text={<><FontAwesomeIcon icon={faFilePdf} />&nbsp;&nbsp;Resume</>}
        />
      </div>
      <div className="scroll-arrow-container" ref={arrowRef}>
        <FontAwesomeIcon icon={faArrowDown} className="scroll-arrow"/>
      </div>
    </div>
  );
}

export default Hero;