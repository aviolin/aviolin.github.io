import React, { useEffect, useRef } from 'react';
import Button from './Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { gsap } from 'gsap';

import useIntersectionObserver from '../hooks/useIntersectionObserver';

const Project = ({
  title,
  screenshotType,
  imageSrc,
  description,
  subdescription,
  projectLink,
  repoLink,
  id,
}) => {
  const projectRef = useRef(null);
  const screenshotRef = useRef(null);
  const dataRefs = useRef([]);

  const onIntersection = (entries) => {
    const [ entry ] = entries;
    if (!entry.isIntersecting) return;

    if (id % 2 === 0) {
      gsap.from(screenshotRef.current, {duration: 1, x: 100, opacity: 0, ease: "power2.out"});
      dataRefs.current.forEach(ref => {
        gsap.from(ref, {duration: .7, x: -100, opacity: 0});
      })
  
    } else {
      gsap.from(screenshotRef.current, {duration: 1, x: -100, opacity: 0});
      dataRefs.current.forEach(ref => {
        gsap.from(ref, {duration: .7, x: 100, opacity: 0});
      })
  
    }
  }

  useIntersectionObserver(projectRef, onIntersection)

  let screenshot = null;
  if (screenshotType === "mobile") {
    screenshot = (
      <div className="screenshot bleed" ref={screenshotRef}>
        <div className="mobile-container">
          <span className="btn1"></span>
          <span className="btn2"></span>
          <span className="btn3"></span>
          <span className="btn4"></span>
          <div className="circle"></div>
          <div className="rectangle"></div>
          <div className="image-container">
            <img src={imageSrc} />
          </div>
        </div>
      </div>
    );
  } else {
    screenshot = (
      <div className="screenshot" ref={screenshotRef}>
        <div className="desktop-container">
          <div className="image-container">
            <img src={imageSrc} />
          </div>
          <div className="circle"></div>
          <div className="triangle"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="project-wrapper">
      <div className="project" ref={projectRef}>
        <h3 ref={ele => dataRefs.current.push(ele)}>{title}</h3>
        {screenshot}
        <p ref={ele => dataRefs.current.push(ele)}>{description}</p>
        <div className="subdescription" ref={ele => dataRefs.current.push(ele)}>
          {subdescription}
        </div>
        <div className={screenshotType === "mobile" ? "buttons spacer" : "buttons"} ref={ele => dataRefs.current.push(ele)}>
          <Button 
            text={<><span><FontAwesomeIcon icon={faExternalLinkAlt} />&nbsp;&nbsp;Live Project</span></>}
          />
          <Button
            style="secondary"
            text={<><FontAwesomeIcon icon={faGithub} />&nbsp;&nbsp;Github Repo</>}
          />
        </div>
      </div>
    </div>
  )
}

export default Project;