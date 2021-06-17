import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFire } from '@fortawesome/free-solid-svg-icons';
import { faReact, faSass, faJs, faHtml5, faPhp, faWordpress, faCss3, faNodeJs } from "@fortawesome/free-brands-svg-icons";
import flashCardsScreenshot from './images/flash-cards-landing.png';
import nebulaEnsembleScreenshot from './images/nebula-ensemble.png';
import annularFusionScreenshot from './images/annular-fusion-screenshot.png';
import metronomeScreenshot from './images/metronome-screenshot.png';

export const projects = [
  {
    title: "Flash Cards",
    screenshotType: "mobile",
    imageSrc: flashCardsScreenshot,
    description: `A web app to easily create, study and share flash cards made using React and Firebase.`,
    liveLink: "https://aviolin.github.io/flash-cards/",
    repoLink: "https://github.com/aviolin/flash-cards/",
    technologies:
      <>
        <span><FontAwesomeIcon icon={faReact}/>&nbsp;&nbsp;React</span>
        <span><FontAwesomeIcon icon={faSass}/>&nbsp;&nbsp;SCSS (Sass)</span>
        <span><FontAwesomeIcon icon={faFire}/>&nbsp;&nbsp;Firebase</span>
        <span><FontAwesomeIcon icon={faJs}/>&nbsp;&nbsp;JavaScript</span>
        <span><FontAwesomeIcon icon={faHtml5}/>&nbsp;&nbsp;HTML5</span>
      </>
  },
  {
    title: "Nebula Ensemble",
    screenshotType: "desktop",
    imageSrc: nebulaEnsembleScreenshot,
    description: `A website and custom WordPress theme for the modern music group "Nebula Ensemble" based in Denver, Colorado.`,
    liveLink: "https://nebulaensemble.org",
    repoLink: "",
    technologies:
      <>
        <span><FontAwesomeIcon icon={faPhp}/>&nbsp;&nbsp;PHP</span>
        <span><FontAwesomeIcon icon={faJs}/>&nbsp;&nbsp;JavaScript</span>
        <span><FontAwesomeIcon icon={faCss3}/>&nbsp;&nbsp;CSS3</span>
        <span><FontAwesomeIcon icon={faWordpress}/>&nbsp;&nbsp;WordPress</span>
        <span><FontAwesomeIcon icon={faHtml5}/>&nbsp;&nbsp;HTML5</span>
      </>
  },
  {
    title: "Metronome",
    screenshotType: "mobile",
    imageSrc: metronomeScreenshot,
    description: `A simple and accurate online metronome made using React.`,
    liveLink: "https://aviolin.github.io/metronome/",
    repoLink: "https://github.com/aviolin/metronome/",
    technologies:
      <>
        <span><FontAwesomeIcon icon={faReact}/>&nbsp;&nbsp;React</span>
        <span><FontAwesomeIcon icon={faJs}/>&nbsp;&nbsp;JavaScript</span>
        <span><FontAwesomeIcon icon={faSass}/>&nbsp;&nbsp;SCSS (Sass)</span>
        <span><FontAwesomeIcon icon={faHtml5}/>&nbsp;&nbsp;HTML5</span>
      </>
  },
  {
    title: "Annular Fusion Timer",
    screenshotType: "desktop",
    imageSrc: annularFusionScreenshot,
    description: `A timer made in React and Node to help musicians perform "Annular Fusion" by Chappell Kingsland over Zoom.`,
    liveLink: "https://aviolin.github.io/annular-fusion/",
    repoLink: "https://github.com/aviolin/annular-fusion/",
    technologies:
      <>
        <span><FontAwesomeIcon icon={faReact}/>&nbsp;&nbsp;React</span>
        <span><FontAwesomeIcon icon={faNodeJs}/>&nbsp;&nbsp;Node</span>
        <span><FontAwesomeIcon icon={faJs}/>&nbsp;&nbsp;JavaScript</span>
        <span><FontAwesomeIcon icon={faSass}/>&nbsp;&nbsp;SCSS (Sass)</span>
        <span><FontAwesomeIcon icon={faHtml5}/>&nbsp;&nbsp;HTML5</span>
      </>
  },
];