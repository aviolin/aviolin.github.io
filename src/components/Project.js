import React, { useEffect, useState, useRef } from 'react';
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
  testAccount=null,
  subdescription,
  projectLink,
  repoLink,
  id,
}) => {
  const projectRef = useRef(null);
  const screenshotRef = useRef(null);
  const dataRefs = useRef([]);
  const [doAnim, setDoAnim] = useState(true);

  const onIntersection = (entries) => {
    const [ entry ] = entries;
    if (!entry.isIntersecting || !doAnim) return;

    let tl = gsap.timeline();


    if (window.matchMedia("(min-width: 768px)").matches) {
      if (id % 2 === 0) {
        gsap.fromTo(dataRefs.current[0], {duration: .7, x: -100, opacity: 0}, {x: 0, opacity: 1, delay: .3});
        gsap.from(screenshotRef.current, {duration: .7, x: 100, opacity: 0, delay: .3});
        gsap.fromTo(dataRefs.current[1], {duration: .7, x: -100, opacity: 0}, {x: 0, opacity: 1, delay: .35});
        gsap.fromTo(dataRefs.current[2], {duration: .7, x: -100, opacity: 0}, {x: 0, opacity: 1, delay: .4});
        gsap.fromTo(dataRefs.current[3], {duration: .7, x: -100, opacity: 0}, {x: 0, opacity: 1, delay: .45});
      } else {
        gsap.fromTo(dataRefs.current[0], {duration: .7, x: 100, opacity: 0}, {x: 0, opacity: 1, delay: .3});
        gsap.from(screenshotRef.current, {duration: .7, x: -100, opacity: 0, delay: .3});
        gsap.fromTo(dataRefs.current[1], {duration: .7, x: 100, opacity: 0}, {x: 0, opacity: 1, delay: .35});
        gsap.fromTo(dataRefs.current[2], {duration: .7, x: 100, opacity: 0}, {x: 0, opacity: 1, delay: .4});
        gsap.fromTo(dataRefs.current[3], {duration: .7, x: 100, opacity: 0}, {x: 0, opacity: 1, delay: .45});
      }
    } else {
      gsap.fromTo(dataRefs.current[0], {duration: .5, y: 100, opacity: 0}, {y: 0, opacity: 1, delay: .25});
      gsap.from(screenshotRef.current, {duration: .5, y: 100, opacity: 0, delay: .3});
      gsap.fromTo(dataRefs.current[1], {duration: .5, y: 100, opacity: 0}, {y: 0, opacity: 1, delay: .35});
      gsap.fromTo(dataRefs.current[2], {duration: .5, y: 100, opacity: 0}, {y: 0, opacity: 1, delay: .4});
      gsap.fromTo(dataRefs.current[3], {duration: .5, y: 100, opacity: 0}, {y: 0, opacity: 1, delay: .45});
    }

    setDoAnim(false);
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
        <div ref={ele => dataRefs.current.push(ele)}>
        <p>{description}</p>
        {testAccount !== null && 
          <p className="test-account">You may use this <b>test account</b> to test the project:<br/>
          Email: <b>{testAccount.email}</b><br/>
          Password: <b>{testAccount.password}</b></p>
        }
        </div>
        <div className="subdescription" ref={ele => dataRefs.current.push(ele)}>
          {subdescription}
        </div>
        <div className={screenshotType === "mobile" ? "buttons spacer" : "buttons"} ref={ele => dataRefs.current.push(ele)}>
          <Button 
            external={true}
            link={projectLink}
            text={<><span><FontAwesomeIcon icon={faExternalLinkAlt} />&nbsp;&nbsp;Live Project</span></>}
          />
          {
            repoLink !== "" &&
            <Button
              external={true}
              link={repoLink}
              style="secondary"
              text={<><FontAwesomeIcon icon={faGithub} />&nbsp;&nbsp;Github Repo</>}
            />
          }
        </div>
      </div>
    </div>
  );
}

export default Project;