import React from 'react';
import Button from './Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Project = ({
  title,
  screenshotType,
  imageSrc,
  description,
  subdescription,
  projectLink,
  repoLink
}) => {
  let screenshot = null;
  if (screenshotType === "mobile") {
    screenshot = (
      <div className="screenshot bleed">
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
      <div className="screenshot">
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
    <div className="project">
      <h3>{title}</h3>
      {screenshot}
      <p>{description}</p>
      <div className="subdescription">
        {subdescription}
      </div>
      <div className={screenshotType === "mobile" ? "buttons spacer" : "buttons"}>
        <Button 
          text={<><span><FontAwesomeIcon icon={faExternalLinkAlt} />&nbsp;&nbsp;Live Project</span></>}
        />
        <Button
          style="secondary"
          text={<><FontAwesomeIcon icon={faGithub} />&nbsp;&nbsp;Github Repo</>}
        />
      </div>
    </div>
  )
}

export default Project;