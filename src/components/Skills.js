import React, { useState, useRef } from 'react';
import { gsap } from 'gsap';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFire } from '@fortawesome/free-solid-svg-icons';
import { faReact, faSass, faJs, faHtml5, faPhp, faWordpress, faGit, faNodeJs } from "@fortawesome/free-brands-svg-icons";

const Skills = () => {
  const skillsRef = useRef(null);
  const [doAnim, setDoAnim] = useState(true);

  const onIntersection = (entries) => {
    const [ entry ] = entries;
    if (!entry.isIntersecting || !doAnim) return;

    let tl = gsap.timeline();
    let skills = document.querySelectorAll('.skill');
    tl.set(skills, { visibility: "visible"});
    tl.from(skills, {duration: .7, opacity: 0, stagger: .1, delay: .2});

    setDoAnim(false);
  }  
  useIntersectionObserver(skillsRef, onIntersection)

  return (
    <div className="skills full-bleed">
      <div className="skills-list" ref={skillsRef}>
        <div className="skill">
          <FontAwesomeIcon icon={faReact} className="icon"/>
          <span>React</span>
        </div>
        <div className="skill">
          <FontAwesomeIcon icon={faJs} className="icon" />
          <span>JavaScript</span>
        </div>
        <div className="skill">
          <FontAwesomeIcon icon={faSass} className="icon" />
          <span>SCSS (Sass)</span>
        </div>
        <div className="skill">
          <FontAwesomeIcon icon={faNodeJs} className="icon" />
          <span>Node.js</span>
        </div>
        <div className="skill">
          <FontAwesomeIcon icon={faFire} className="icon" />
          <span>Firebase</span>
        </div>
        <div className="skill">
          <FontAwesomeIcon icon={faHtml5} className="icon" />
          <span>HTML5</span>
        </div>
        <div className="skill">
          <FontAwesomeIcon icon={faPhp} className="icon" />
          <span>PHP</span>
        </div>
        <div className="skill">
          <FontAwesomeIcon icon={faGit} className="icon" />
          <span>Git</span>
        </div>
        <div className="skill">
          <FontAwesomeIcon icon={faWordpress} className="icon" />
          <span>WordPress</span>
        </div>
      </div>
    </div>
  );
}

export default Skills;