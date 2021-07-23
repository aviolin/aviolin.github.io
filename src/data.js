import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFire } from '@fortawesome/free-solid-svg-icons';
import { faReact, faSass, faJs, faHtml5, faPhp, faWordpress, faCss3, faNodeJs, faVuejs } from "@fortawesome/free-brands-svg-icons";
//import flashCardsLanding from './images/flash-cards-landing.png';
import flashCardsScreenshot from './images/flash-cards-screenshot.png';
import nebulaEnsembleScreenshot from './images/nebula-ensemble.png';
//import annularFusionScreenshot from './images/annular-fusion-screenshot.png';
import annularFusionMobileScreenshot from './images/annular-fusion-mobile-screenshot.png';
import metronomeScreenshot from './images/metronome-screenshot.png';
//import metronomeScreenshotDesktop from './images/metronome-screenshot-desktop.png';
import violinWebsiteScreenshot from './images/violin-screenshot.png';

export const projects = [
  {
    title: "Metronome",
    screenshotType: "mobile",
    imageSrc: metronomeScreenshot,
    description: `A simple and accurate online metronome made using React.`,
    liveLink: "https://www.arlocodes.com/metronome/",
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
    title: "Flash Cards",
    screenshotType: "desktop",
    imageSrc: flashCardsScreenshot,
    description: `A web app to easily create, study and share flash cards made using React and Firebase.`,
    testAccount: {
      email: `testing@test.com`,
      password: `testing123`
    },
    liveLink: "https://www.arlocodes.com/flash-cards/",
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
    title: "Synchronous Timer",
    screenshotType: "mobile",
    imageSrc: annularFusionMobileScreenshot,
    description: `A timer that can sync up across devices. Made using React, Node.js, Express and WebSockets as a collaboration with musicians to aid in performing a piece of music called "Annular Fusion" over Zoom.`,
    liveLink: "https://www.arlocodes.com/annular-fusion/",
    repoLink: "https://github.com/aviolin/annular-fusion/",
    technologies:
      <>
        <span><FontAwesomeIcon icon={faReact}/>&nbsp;&nbsp;React</span>
        <span><FontAwesomeIcon icon={faNodeJs}/>&nbsp;&nbsp;Node.js</span>
        <span><FontAwesomeIcon icon={faJs}/>&nbsp;&nbsp;JavaScript</span>
        <span><FontAwesomeIcon icon={faSass}/>&nbsp;&nbsp;SCSS (Sass)</span>
        <span><FontAwesomeIcon icon={faHtml5}/>&nbsp;&nbsp;HTML5</span>
      </>
  },
  {
    title: "Freelance Violinist Website",
    screenshotType: "desktop",
    imageSrc: violinWebsiteScreenshot,
    description: `A website using VueJS for my business as a freelance violinist and teacher. Features a custom built music playlist using Howler.js.`,
    liveLink: "https://arloadams.com",
    repoLink: "https://github.com/aviolin/violin/",
    technologies:
      <>
        <span><FontAwesomeIcon icon={faVuejs}/>&nbsp;&nbsp;VueJS</span>
        <span><FontAwesomeIcon icon={faJs}/>&nbsp;&nbsp;JavaScript</span>
        <span><FontAwesomeIcon icon={faSass}/>&nbsp;&nbsp;SCSS (Sass)</span>
        <span><FontAwesomeIcon icon={faHtml5}/>&nbsp;&nbsp;HTML5</span>
      </>
  },
  {
    title: "Nebula Ensemble",
    screenshotType: "desktop",
    imageSrc: nebulaEnsembleScreenshot,
    description: `A custom WordPress theme and website for the modern music group Nebula Ensemble.`,
    liveLink: "https://nebulaensemble.org",
    repoLink: "",
    technologies:
      <>
        <span><FontAwesomeIcon icon={faPhp}/>&nbsp;&nbsp;PHP</span>
        <span><FontAwesomeIcon icon={faJs}/>&nbsp;&nbsp;JavaScript</span>
        <span><FontAwesomeIcon icon={faCss3}/>&nbsp;&nbsp;CSS</span>
        <span><FontAwesomeIcon icon={faWordpress}/>&nbsp;&nbsp;WordPress</span>
        <span><FontAwesomeIcon icon={faHtml5}/>&nbsp;&nbsp;HTML5</span>
      </>
  },
];