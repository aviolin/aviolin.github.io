import * as React from "react"
import '../styles/normalize.css';
import '../styles/main.scss';

import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Project from '../components/Project';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFire } from '@fortawesome/free-solid-svg-icons';
import { faReact, faSass, faJs, faHtml5, faPhp, faWordpress, faCss3, faNodeJs } from "@fortawesome/free-brands-svg-icons";

import flashCardsScreenshot from '../images/flash-cards-landing.png';
import nebulaEnsembleScreenshot from '../images/nebula-ensemble.png';

const projects = [
  {
    title: "Flash Cards",
    screenshotType: "mobile",
    imageSrc: flashCardsScreenshot,
    description: `A web app to easily create, study and share flash cards made using React and Firebase.`,
    liveLink: "",
    repoLink: "",
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
    liveLink: "",
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
    title: "Annular Fusion Timer",
    screenshotType: "mobile",
    imageSrc: flashCardsScreenshot,
    description: `A timer made in React and Node to help musicians perform "Annular Fusion" by Chappell Kingsland over Zoom`,
    liveLink: "",
    repoLink: "",
    technologies:
      <>
        <span><FontAwesomeIcon icon={faReact}/>&nbsp;&nbsp;React</span>
        <span><FontAwesomeIcon icon={faNodeJs}/>&nbsp;&nbsp;Node</span>
        <span><FontAwesomeIcon icon={faJs}/>&nbsp;&nbsp;JavaScript</span>
        <span><FontAwesomeIcon icon={faSass}/>&nbsp;&nbsp;SCSS (Sass)</span>
        <span><FontAwesomeIcon icon={faHtml5}/>&nbsp;&nbsp;HTML5</span>
      </>
  },
  {
    title: "Metronome",
    screenshotType: "desktop",
    imageSrc: nebulaEnsembleScreenshot,
    description: `A simple and accurate online metronome made using React.`,
    liveLink: "",
    repoLink: "",
    technologies:
      <>
        <span><FontAwesomeIcon icon={faReact}/>&nbsp;&nbsp;React</span>
        <span><FontAwesomeIcon icon={faJs}/>&nbsp;&nbsp;JavaScript</span>
        <span><FontAwesomeIcon icon={faSass}/>&nbsp;&nbsp;SCSS (Sass)</span>
        <span><FontAwesomeIcon icon={faHtml5}/>&nbsp;&nbsp;HTML5</span>
      </>
  }
];

const IndexPage = () => {
  return (
    <div className="wrapper">
      <Header />
      <main>
        <Hero />
        <section>
          <h2>Check out some of my projects</h2>

          {projects.map(project => {
            return (
              <Project 
                title={project.title}
                screenshotType={project.screenshotType}
                imageSrc={project.imageSrc}
                description={project.description}
                subdescription={project.technologies}
                projectLink={project.liveLink}
                repoLink={project.repoLink}
              />
            );
          })}

        </section>
        <Contact />
        
      </main>
      <Footer />
    </div>
  )
}

export default IndexPage
