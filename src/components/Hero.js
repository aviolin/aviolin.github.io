import React from 'react';
import Button from './Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf, faArrowDown } from '@fortawesome/free-solid-svg-icons';

const Hero = () => {
  return (
      <div className="hero">
        <h1>
          <span>Hello, I'm Arlo Adams.</span>
          <p>I am a <b>Front-End Web Developer</b> creating interactive online experiences in Denver, Colorado.</p>
        </h1>
        <div className="buttons">
          <Button
            text="Projects"
          />
          <Button 
            style="secondary"
            text={<><FontAwesomeIcon icon={faFilePdf} />&nbsp;&nbsp;Resume</>}
          />
        </div>
        <div className="scroll-arrow-container">
          <FontAwesomeIcon icon={faArrowDown} className="scroll-arrow"/>
        </div>
      </div>
  );
}

export default Hero;